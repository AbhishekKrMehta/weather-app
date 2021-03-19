import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { WeatherDataService } from './services/weather-data.service';
import { HttpClientModule } from '@angular/common/http';
import { ForecastComponent } from './components/forecast/forecast.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DailyForecastComponent } from './components/daily-forecast/daily-forecast.component';
import { InvalidRouteComponent } from './components/invalid-route/invalid-route.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HomepageComponent,
    ForecastComponent,
    DailyForecastComponent,
    InvalidRouteComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [WeatherDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
