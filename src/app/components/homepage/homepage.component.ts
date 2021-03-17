import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { forkJoin, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
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
      this.citiesList.map((cityName) => this.weatherDataService.getCurrentWeatherData(cityName)
        .pipe(
          map((response: CurrentWeatherResponse) => this.mapCurrentWeatherResponse(cityName, response))
          // map the api response as per the frontend requirement
        ))
    )
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((mappedResponse: Array<CurrentWeatherMapped>) => this.currentWeatherMappedList = mappedResponse);
  }

  private mapCurrentWeatherResponse(cityName: string, response: CurrentWeatherResponse): CurrentWeatherMapped {
    return {
      cityName,
      averageTemperature: {
        value: (response.main.temp_min + response.main.temp_max) / 2,
        unit: 'celcius' // TODO
      },
      coordinates: {
        latitude: response.coord.lat,
        longitude: response.coord.lon
      },
      windStrength: {
        value: response.wind.speed,
        unit: 'km/hr' // TODO
      }
    };
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
