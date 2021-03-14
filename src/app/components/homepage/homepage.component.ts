import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/interfaces/weather-data.interface';
import { WeatherDataService } from 'src/app/services/weather-data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  weatherData!: Array<WeatherData>;

  constructor(private weatherDataService: WeatherDataService) { }

  ngOnInit(): void {
    // this.initWeatherData();
  }

  private initWeatherData(): void {
    this.weatherDataService.getWeatherdata('amsterdam')
      .subscribe((response: WeatherData) => {
        console.log(`🚀 ~ file: homepage.component.ts ~ line 21 ~ .subscribe ~ response`, response);
      });
  }
}
