import { Temperature, WindSpeed, Coordinates } from "./common.interface";

export interface CurrentWeatherMapped {
  currentWeather: WeatherDetails;
}

interface WeatherDetails {
  cityName: string;
  averageTemperature: Temperature;
  windStrength: WindSpeed;
  coordinates: Coordinates;
}


