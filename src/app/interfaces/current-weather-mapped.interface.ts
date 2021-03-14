export interface CurrentWeatherMapped {
  currentWeather: WeatherDetails;
  forecast: WeatherDetails;
}

interface WeatherDetails {
  cityName: string;
  averageTemperature: number;
  windStrength: number;
  coordinates: Coordinates;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}
