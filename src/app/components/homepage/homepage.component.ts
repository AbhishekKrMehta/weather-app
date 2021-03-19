import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { forkJoin, Observable, Subject } from 'rxjs';
import { delay, map, takeUntil } from 'rxjs/operators';
import { TemperatureUnits, Unit, WindStrengthUnits } from 'src/app/enums/global.enum';
import { CurrentWeatherResponse, CurrentWeatherMapped } from 'src/app/interfaces';
import { UnitSelectorService } from 'src/app/services/unit-selector.service';
import { WeatherDataService } from 'src/app/services/weather-data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit, OnDestroy {
  currentWeatherMappedList!: Array<CurrentWeatherMapped>;
  citiesList: string[] = ['Amsterdam', 'Rome', 'Prague', 'Berlin', 'Paris'];
  citiesFormArray = new FormArray([]);
  temperatureUnit!: TemperatureUnits;
  windStrengthUnit!: WindStrengthUnits;
  showLoader = true;
  private unsubscribe$ = new Subject();

  constructor(
    private weatherDataService: WeatherDataService,
    private unitSelectorService: UnitSelectorService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.unitSelectorService.selectedUnit$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((selectedUnit: Unit) => {
        this.showLoader = true;
        this.initWeatherData(selectedUnit);
      });
  }

  private initWeatherData(unit: Unit): void {
    const mappedResponse$: Observable<CurrentWeatherMapped[]> = forkJoin(
      this.citiesList.map((cityName) => this.weatherDataService.getCurrentWeatherData(cityName, unit)
        .pipe(
          // map the api response as per the frontend requirement
          map((response: CurrentWeatherResponse) => this.mapCurrentWeatherResponse(cityName, response))
        ))
    );

    mappedResponse$
      .pipe(
        takeUntil(this.unsubscribe$),
        delay(2000), // just to show loader in UI
      )
      .subscribe((mappedResponse: Array<CurrentWeatherMapped>) => {
        this.currentWeatherMappedList = mappedResponse;
        this.temperatureUnit = TemperatureUnits[unit];
        this.windStrengthUnit = WindStrengthUnits[unit];
        this.snackBar.open(`Selected unit: ${unit.toUpperCase()}`, 'OK', {
          duration: 4000,
        });
        this.showLoader = false;
      });
  }

  private mapCurrentWeatherResponse(cityName: string, response: CurrentWeatherResponse): CurrentWeatherMapped {
    return {
      cityName,
      averageTemperature: (response.main.temp_min + response.main.temp_max) / 2,
      coordinates: {
        latitude: response.coord.lat,
        longitude: response.coord.lon
      },
      windStrength: response.wind.speed
    };
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
