import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { delay, map, takeUntil } from 'rxjs/operators';
import { Coordinates, HourlyForecastMapped, HourlyForecastResponse } from 'src/app/interfaces';
import { WeatherDataService } from 'src/app/services/weather-data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GlobalConstants } from 'src/app/global-constants';
import { UnitSelectorService } from 'src/app/services/unit-selector.service';
import { TemperatureUnits, Unit, WindStrengthUnits } from 'src/app/enums/global.enum';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() coordinates!: Coordinates;
  hourlyForecastMappedList!: Array<HourlyForecastMapped>;
  showSpinner = true;
  temperatureUnit!: TemperatureUnits;
  windStrengthUnit!: WindStrengthUnits;
  tableData = {
    displayedColumns: GlobalConstants.forecastDisplayedColumns,
    dataSource: new MatTableDataSource<HourlyForecastMapped>([])
  };
  private unsubscribe$ = new Subject();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private weatherDataService: WeatherDataService,
    private unitSelectorService: UnitSelectorService
  ) { }

  ngOnInit(): void {
    this.unitSelectorService.selectedUnit$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((selectedUnit: Unit) => {
        this.showSpinner = true;
        this.initForecastData(selectedUnit);
      });
  }

  ngAfterViewInit(): void {
    this.tableData.dataSource.paginator = this.paginator;
  }

  private initForecastData(unit: Unit): void {
    this.weatherDataService.getHourlyWeatherData(this.coordinates, unit)
      .pipe(
        delay(2000), // just to show spinner
        map((response: HourlyForecastResponse) => this.mapHourlyForecastResponse(response)),
        takeUntil(this.unsubscribe$))
      .subscribe((mappedResponse: Array<HourlyForecastMapped>) => {
        this.tableData.dataSource.data = mappedResponse;
        this.temperatureUnit = TemperatureUnits[unit];
        this.windStrengthUnit = WindStrengthUnits[unit];
        this.showSpinner = false;
      });
  }

  private mapHourlyForecastResponse(response: HourlyForecastResponse): Array<HourlyForecastMapped> {
    const mappedResponse: Array<HourlyForecastMapped> = [];
    response.hourly.forEach(
      hour => mappedResponse.push({
        averageTemperature: hour.temp,
        time: new Date(hour.dt * 1000), // convert unix timestamp to Javascript date
        windSpeed: hour.wind_speed
      })
    );
    return mappedResponse;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
