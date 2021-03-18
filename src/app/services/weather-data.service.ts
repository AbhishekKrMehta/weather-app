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
        retry(2),
        catchError(this.handleError)
      );
    return of({
      coord: {
        lon: 4.8897,
        lat: 52.374
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04d'
      }],
      base: 'stations',
      main: {
        temp: 280.58,
        feels_like: 273.93,
        temp_min: 279.82,
        temp_max: 280.93,
        pressure: 1008,
        humidity: 81
      },
      visibility: 10000,
      wind: {
        speed: 7.72,
        deg: 290
      },
      clouds: {
        all: 75
      },
      dt: 1615716401,
      sys: {
        type: 1,
        id: 1524,
        country: 'NL',
        sunrise: 1615701420,
        sunset: 1615743743
      },
      timezone: 3600,
      id: 2759794,
      name: 'Amsterdam',
      cod: 200
    });

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
