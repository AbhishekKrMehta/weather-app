import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GlobalConstants } from '../global-constants';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Coordinates, CurrentWeatherResponse, HourlyForecastResponse } from '../interfaces';
import { Unit } from '../enums/global.enum';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private http: HttpClient) { }

  public getCurrentWeatherData(cityName: string, unit: Unit = Unit.metric): Observable<CurrentWeatherResponse> {
    const currentWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${GlobalConstants.apiKey}&units=${unit}`;

    return this.http.get<CurrentWeatherResponse>(currentWeatherUrl)
      .pipe(
        retry(2), // retry to fetch data in case of error
        catchError(this.handleError)
      );
  }

  public getHourlyWeatherData({ latitude, longitude }: Coordinates, unit: Unit = Unit.metric): Observable<HourlyForecastResponse> {
    const hourlyWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,daily,alerts&appid=${GlobalConstants.apiKey}&units=${unit}`;
    return this.http.get<HourlyForecastResponse>(hourlyWeatherUrl)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // client/network error
      console.error('An error occurred:', error.error.message);
    } else {
      // backend error
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      `Something is not right :( Please try again later.`);
  }
}
