import { Coordinates } from './common.interface';

export interface CurrentWeatherMapped {
  cityName: string;
  averageTemperature: number;
  windStrength: number;
  coordinates: Coordinates;
}
