import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CurrentWeatherResponse, CurrentWeatherMapped } from 'src/app/interfaces';
import { WeatherDataService } from 'src/app/services/weather-data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit, OnDestroy {
  currentWeatherResponse!: Array<CurrentWeatherResponse>;
  currentWeatherMapped!: Array<CurrentWeatherMapped>;
  citiesList: string[] = ['Amsterdam', 'Woodinville', 'Krasnoyarsk', 'Stockholm', 'Beijing'];
  private unsubscribe$ = new Subject();

  constructor(private weatherDataService: WeatherDataService) { }

  ngOnInit(): void {
    this.initWeatherData();
  }

  private initWeatherData(): void {
    forkJoin(this.citiesList.map((city) => this.weatherDataService.getCurrentWeatherData(city)))
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response: Array<CurrentWeatherResponse>) => this.currentWeatherResponse = response);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
