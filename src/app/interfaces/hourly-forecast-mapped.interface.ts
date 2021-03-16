import { Temperature, WindSpeed } from "./common.interface";

export interface HourlyForecast{
    time: string;
    averageTemperature: Temperature;
    windSpeed: WindSpeed;
}