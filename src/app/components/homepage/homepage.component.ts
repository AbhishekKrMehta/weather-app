import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { WeatherDataResponse, WeatherDataRequired } from 'src/app/interfaces';
import { WeatherDataService } from 'src/app/services/weather-data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit, OnDestroy {
  weatherDataResponse!: Array<WeatherDataResponse>;
  weatherDataRequired!: Array<WeatherDataRequired>;
  citiesList: string[] = ['Amsterdam', 'Woodinville', 'Krasnoyarsk', 'Stockholm', 'Beijing'];
  private unsubscribe$ = new Subject();

  constructor(private weatherDataService: WeatherDataService) { }

  ngOnInit(): void {
    this.initWeatherData();
  }

  private initWeatherData(): void {
    forkJoin(this.citiesList.map((city) => this.weatherDataService.getWeatherdata(city)))
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response: Array<WeatherDataResponse>) => this.weatherDataResponse = response);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
