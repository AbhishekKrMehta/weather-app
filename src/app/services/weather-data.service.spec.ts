import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Unit } from '../enums/global.enum';
import { GlobalConstants } from '../global-constants';
import { mockHourlyForecastResponse, mockWeatherData } from '../mock-data';
import { WeatherDataService } from './weather-data.service';

describe('WeatherDataService', () => {
  let service: WeatherDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(WeatherDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // it ensures that no request is outstanding
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make GET call to the correct URL and return right data when getCurrentWeatherData is called', () => {

    service.getCurrentWeatherData('Amsterdam').subscribe(weatherData => {
      expect(weatherData.main).toBeTruthy();
      expect(weatherData.coord).toBeTruthy();
      expect(weatherData.wind).toBeTruthy();
      expect(weatherData).toEqual(mockWeatherData);
    });
    const request = httpMock.expectOne(`http://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=${GlobalConstants.apiKey}&units=${Unit.metric}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockWeatherData);
  });

  it('should make GET call to the correct URL and return right data when getHourlyWeatherData is called', () => {
    service.getHourlyWeatherData({ latitude: 1, longitude: 2 }).subscribe();
    const request = httpMock.expectOne(`https://api.openweathermap.org/data/2.5/onecall?lat=1&lon=2&exclude=current,minutely,daily,alerts&appid=${GlobalConstants.apiKey}&units=${Unit.metric}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockWeatherData);
  });
});
