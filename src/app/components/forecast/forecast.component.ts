import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { pipe, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Coordinates, HourlyForecast, HourlyWeatherResponse } from 'src/app/interfaces';
import { WeatherDataService } from 'src/app/services/weather-data.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit,OnDestroy {
  @Input() coordinates!: Coordinates;
  // hourlyForecastList!:Array<HourlyForecast>;
  hourlyForecastList!:any;
  private unsubscribe$ = new Subject();

  constructor(private weatherDataService: WeatherDataService) { }

  ngOnInit(): void {
    this.initForecastData();
  }

  private initForecastData(): void {
    this.weatherDataService.getHourlyWeatherData('city','test')
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((response: HourlyWeatherResponse) => this.hourlyForecastList = response);
    }

    ngOnDestroy(): void {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
    }
}
