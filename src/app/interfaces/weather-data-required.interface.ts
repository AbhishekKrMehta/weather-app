export interface WeatherDataRequired {
  currentWeather: WeatherDetails;
  forecast: WeatherDetails;
}

interface WeatherDetails {
  cityName: string;
  averageTemperature: number;
  windStrength: number;
  coordinates: Coordinates;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}
