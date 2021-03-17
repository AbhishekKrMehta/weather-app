import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { pipe, Subject } from 'rxjs';
import { delay, map, takeUntil } from 'rxjs/operators';
import { Coordinates, HourlyForecastMapped, HourlyForecastResponse } from 'src/app/interfaces';
import { WeatherDataService } from 'src/app/services/weather-data.service';
import { GlobalConstants } from '../../global-constants';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit, OnDestroy {
  @Input() coordinates!: Coordinates;
  @Input() unit!: 'someUnit'; // TODO: create enum
  hourlyForecastMappedList!: any;
  // hourlyForecastMappedList!: Array<HourlyForecastMapped>;
  private unsubscribe$ = new Subject();

  constructor(private weatherDataService: WeatherDataService) { }

  ngOnInit(): void {
    this.hourlyForecastMappedList = [
      {
        averageTemperature: {
          value: 277.28,
          unit: ''
        },
        time: '2021-03-17T21:00:00.000Z',
        windSpeed: {
          value: 2.63,
          unit: ''
        }
      },
      {
        averageTemperature: {
          value: 276.9,
          unit: ''
        },
        time: '2021-03-17T22:00:00.000Z',
        windSpeed: {
          value: 1.6,
          unit: ''
        }
      },
      {
        averageTemperature: {
          value: 276.63,
          unit: ''
        },
        time: '2021-03-17T23:00:00.000Z',
        windSpeed: {
          value: 1.47,
          unit: ''
        }
      },
      {
        averageTemperature: {
          value: 276.32,
          unit: ''
        },
        time: '2021-03-18T00:00:00.000Z',
        windSpeed: {
          value: 1.64,
          unit: ''
        }
      },
      {
        averageTemperature: {
          value: 275.99,
          unit: ''
        },
        time: '2021-03-18T01:00:00.000Z',
        windSpeed: {
          value: 1.21,
          unit: ''
        }
      },
      {
        averageTemperature: {
          value: 276.15,
          unit: ''
        },
        time: '2021-03-18T02:00:00.000Z',
        windSpeed: {
          value: 0.98,
          unit: ''
        }
      },
      {
        averageTemperature: {
          value: 276.05,
          unit: ''
        },
        time: '2021-03-18T03:00:00.000Z',
        windSpeed: {
          value: 1.22,
          unit: ''
        }
      },
      {
        averageTemperature: {
          value: 275.98,
          unit: ''
        },
        time: '2021-03-18T04:00:00.000Z',
        windSpeed: {
          value: 1.26,
          unit: ''
        }
      },
      {
        averageTemperature: {
          value: 275.88,
          unit: ''
        },
        time: '2021-03-18T05:00:00.000Z',
        windSpeed: {
          value: 1.26,
          unit: ''
        }
      },
      {
        averageTemperature: {
          value: 276.04,
          unit: ''
        },
        time: '2021-03-18T06:00:00.000Z',
        windSpeed: {
          value: 1.45,
          unit: ''
        }
      }
    ];
    // this.initForecastData();
  }

  // private initForecastData(): void {
  //   this.weatherDataService.getHourlyWeatherData(this.coordinates)
  //     .pipe(
  //       delay(2000), // just to show spinner in application
  //       map((response: HourlyForecastResponse) => this.mapHourlyForecastResponse(response)),
  //       takeUntil(this.unsubscribe$))
  //     .subscribe((mappedResponse: Array<HourlyForecastMapped>) => {
  //       console.log(`🚀 ~ file: forecast.component.ts ~ line 30 ~ .subscribe ~ mappedResponse`, mappedResponse);
  //       this.hourlyForecastMappedList = mappedResponse;
  //     });
  // }

  private mapHourlyForecastResponse(response: HourlyForecastResponse): Array<HourlyForecastMapped> {
    const mappedResponse: Array<HourlyForecastMapped> = [];
    response.hourly
      .slice(0, GlobalConstants.numberOfHoursInForcast) // to keep the forcast list short
      .forEach(
        hour => mappedResponse.push({
          averageTemperature:
          {
            value: hour.temp,
            unit: '' // TODO: add unit
          },
          time: new Date(hour.dt * 1000), // convert unix timestamp to Javascript date
          windSpeed: {
            value: hour.wind_speed,
            unit: '' // TODO: add unit
          }
        })
      );
    return mappedResponse;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
