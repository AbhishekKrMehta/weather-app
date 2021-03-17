import { Temperature, WindSpeed } from './common.interface';

export interface HourlyForecastMapped {
  time: Date;
  averageTemperature: Temperature;
  windSpeed: WindSpeed;
}
