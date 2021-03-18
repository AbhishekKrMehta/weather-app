import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { forkJoin, Subject } from 'rxjs';
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
  citiesList: string[] = ['Amsterdam', 'Woodinville', 'Krasnoyarsk', 'Stockholm', 'Beijing'];
  citiesFormArray = new FormArray([]);
  temperatureUnit!: TemperatureUnits;
  windStrengthUnit!: WindStrengthUnits;
  showLoader = true;
  private unsubscribe$ = new Subject();

  constructor(
    private weatherDataService: WeatherDataService,
    private unitSelectorService: UnitSelectorService
  ) { }

  ngOnInit(): void {
    this.unitSelectorService.selectedUnit$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((selectedUnit: Unit) => {
        this.showLoader = true;
        this.initWeatherData(selectedUnit);
      });

    // this.citiesList.forEach(city => {
    //   this.citiesFormArray.push(new FormControl(''));
    // });
  }

  private initWeatherData(unit: Unit): void {
    forkJoin(
      this.citiesList.map((cityName) => this.weatherDataService.getCurrentWeatherData(cityName, unit)
        .pipe(
          // map the api response as per the frontend requirement
          map((response: CurrentWeatherResponse) => this.mapCurrentWeatherResponse(cityName, response, unit))
        ))
    )
      .pipe(
        delay(2000), // just to show loader
        takeUntil(this.unsubscribe$)
      )
      .subscribe((mappedResponse: Array<CurrentWeatherMapped>) => {
        this.currentWeatherMappedList = mappedResponse;
        this.temperatureUnit = TemperatureUnits[unit];
        this.windStrengthUnit = WindStrengthUnits[unit];
        this.showLoader = false;
      });
  }

  private mapCurrentWeatherResponse(cityName: string, response: CurrentWeatherResponse, unit: Unit): CurrentWeatherMapped {
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
