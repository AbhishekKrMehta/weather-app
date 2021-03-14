import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GlobalConstants } from '../global-constants';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { WeatherData } from '../interfaces/weather-data.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private http: HttpClient) { }

  public getWeatherdata(cityName: string): Observable<WeatherData> {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${GlobalConstants.apiKey}`;
    console.log(`🚀 ~ file: weather-data.service.ts ~ line 17 ~ getWeatherdata ~ url`, url);
    return this.http.get<WeatherData>(url)
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
