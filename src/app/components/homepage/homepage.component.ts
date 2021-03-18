import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { forkJoin, Subject } from 'rxjs';
import { delay, map, takeUntil } from 'rxjs/operators';
import { Unit } from 'src/app/enums/global.enum';
import { CurrentWeatherResponse, CurrentWeatherMapped } from 'src/app/interfaces';
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
  private unsubscribe$ = new Subject();

  constructor(private weatherDataService: WeatherDataService) { }

  ngOnInit(): void {
    this.initWeatherData();
    this.citiesList.forEach(city => {
      this.citiesFormArray.push(new FormControl(''));
    });
  }

  private initWeatherData(): void {
    forkJoin(
      this.citiesList.map((cityName) => this.weatherDataService.getCurrentWeatherData(cityName, Unit.imperial) // get unit from parent/global
        .pipe(
          map((response: CurrentWeatherResponse) => this.mapCurrentWeatherResponse(cityName, response))
          // map the api response as per the frontend requirement
        ))
    )
      .pipe(
        delay(2000), // just to show spinner
        takeUntil(this.unsubscribe$))
      .subscribe((mappedResponse: Array<CurrentWeatherMapped>) => this.currentWeatherMappedList = mappedResponse);
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
