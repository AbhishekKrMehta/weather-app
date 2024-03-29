# Weather Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.4.

## Summary

This is a weather application that uses the [Ppenweather API](https://openweathermap.org/api) to display weather data.
This uses Angular 11 to make the frontend.
A demo can be seen at [https://abhishekkrmehta.github.io/weather-app/](https://abhishekkrmehta.github.io/weather-app/)
![Alt text](src/assets/images/app-screenshot.jpg "App")

## Development server

- Install Angular CLI and Node.js
- Navigate to the project directory and run `npm install`
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Deployment

This application is deployed using github pages on [https://abhishekkrmehta.github.io/weather-app/](https://abhishekkrmehta.github.io/weather-app/).

## App contains

- **AppComponent**: Root component
- **ContentComponent**: It contains Header and router outlet
- **HomepageComponent**: Shows the landing page with weather data
- **ForecastComponent**: Shows the hourly forecast
- **DailyForecastComponent**: still WIP
- **InvalidRouteComponent**: Wildcard route component
- **FooterComponent**: Contains the footer

- **UnitSelectorService**: Contains Behaviour subject that emits value when ever the unit changes
- **WeatherDataService**: Contains the methods that fetch weather data

## Can be improved

- make the app responsive
- improve unit test coverage
- remove unusedd imports/variables

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Unit test overview:
![Alt text](src/assets/images/test-screenshot.jpg "Test overview")

## Author

This app was built by Abhishek.
You can view my portfolio site at: [http://abhishekmehta.co/](http://abhishekmehta.co/)
