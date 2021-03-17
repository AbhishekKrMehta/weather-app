import { Temperature, WindSpeed, Coordinates } from './common.interface';

export interface CurrentWeatherMapped {
  cityName: string;
  averageTemperature: Temperature;
  windStrength: WindSpeed;
  coordinates: Coordinates;
}
