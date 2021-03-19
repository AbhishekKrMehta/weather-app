import { HourlyForecastResponse } from '../interfaces';

export const mockHourlyForecastResponse: HourlyForecastResponse = {
  lat: 50.088,
  lon: 14.4208,
  timezone: 'Europe/Prague',
  timezone_offset: 3600,
  hourly: [{
    dt: 1616184000,
    temp: -0.72,
    feels_like: -6.11,
    pressure: 1020,
    humidity: 100,
    dew_point: -0.72,
    uvi: 0,
    clouds: 90,
    visibility: 10000,
    wind_speed: 4.72,
    wind_deg: 356,
    wind_gust: 8.35,
    weather: [{
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04n'
    }],
    pop: 0.25
  }, {
    dt: 1616187600,
    temp: -0.57,
    feels_like: -6.36,
    pressure: 1021,
    humidity: 92,
    dew_point: -1.57,
    uvi: 0,
    clouds: 94,
    visibility: 5879,
    wind_speed: 5.1,
    wind_deg: 14,
    wind_gust: 8.57,
    weather: [{
      id: 600,
      main: 'Snow',
      description: 'light snow',
      icon: '13n'
    }],
    pop: 0.37,
  }, {
    dt: 1616191200,
    temp: -0.8,
    feels_like: -7.02,
    pressure: 1022,
    humidity: 78,
    dew_point: -3.77,
    uvi: 0,
    clouds: 97,
    visibility: 10000,
    wind_speed: 5.29,
    wind_deg: 24,
    wind_gust: 8.21,
    weather: [{
      id: 600,
      main: 'Snow',
      description: 'light snow',
      icon: '13n'
    }],
    pop: 0.56,
  }, {
    dt: 1616194800,
    temp: -1.44,
    feels_like: -7.35,
    pressure: 1024,
    humidity: 77,
    dew_point: -4.54,
    uvi: 0,
    clouds: 99,
    visibility: 10000,
    wind_speed: 4.73,
    wind_deg: 16,
    wind_gust: 7.61,
    weather: [{
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04n'
    }],
    pop: 0.57
  }, {
    dt: 1616198400,
    temp: -1.83,
    feels_like: -7.91,
    pressure: 1024,
    humidity: 72,
    dew_point: -5.71,
    uvi: 0,
    clouds: 98,
    visibility: 10000,
    wind_speed: 4.78,
    wind_deg: 12,
    wind_gust: 7.71,
    weather: [{
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04n'
    }],
    pop: 0.54
  }, {
    dt: 1616202000,
    temp: -2.49,
    feels_like: -8.48,
    pressure: 1025,
    humidity: 70,
    dew_point: -7.54,
    uvi: 0,
    clouds: 69,
    visibility: 10000,
    wind_speed: 4.52,
    wind_deg: 15,
    wind_gust: 7.94,
    weather: [{
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04n'
    }],
    pop: 0.34
  }, {
    dt: 1616205600,
    temp: -2.87,
    feels_like: -8.64,
    pressure: 1025,
    humidity: 72,
    dew_point: -7.72,
    uvi: 0,
    clouds: 58,
    visibility: 10000,
    wind_speed: 4.21,
    wind_deg: 14,
    wind_gust: 7.44,
    weather: [{
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04n'
    }],
    pop: 0.24
  }, {
    dt: 1616209200,
    temp: -3.08,
    feels_like: -8.9,
    pressure: 1025,
    humidity: 73,
    dew_point: -7.63,
    uvi: 0,
    clouds: 56,
    visibility: 10000,
    wind_speed: 4.28,
    wind_deg: 11,
    wind_gust: 7.44,
    weather: [{
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04n'
    }],
    pop: 0.2
  }, {
    dt: 1616212800,
    temp: -3.16,
    feels_like: -9.09,
    pressure: 1026,
    humidity: 72,
    dew_point: -7.86,
    uvi: 0,
    clouds: 54,
    visibility: 10000,
    wind_speed: 4.4,
    wind_deg: 10,
    wind_gust: 7.45,
    weather: [{
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04n'
    }],
    pop: 0.2
  }, {
    dt: 1616216400,
    temp: -3.43,
    feels_like: -9.31,
    pressure: 1026,
    humidity: 73,
    dew_point: -8.07,
    uvi: 0,
    clouds: 51,
    visibility: 10000,
    wind_speed: 4.32,
    wind_deg: 8,
    wind_gust: 7.13,
    weather: [{
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04n'
    }],
    pop: 0.13
  }, {
    dt: 1616220000,
    temp: -3.33,
    feels_like: -9.35,
    pressure: 1027,
    humidity: 71,
    dew_point: -8.29,
    uvi: 0.16,
    clouds: 43,
    visibility: 10000,
    wind_speed: 4.49,
    wind_deg: 8,
    wind_gust: 6.89,
    weather: [{
      id: 802,
      main: 'Clouds',
      description: 'scattered clouds',
      icon: '03d'
    }],
    pop: 0.13
  }, {
    dt: 1616223600,
    temp: -2.72,
    feels_like: -9.12,
    pressure: 1028,
    humidity: 64,
    dew_point: -9.04,
    uvi: 0.52,
    clouds: 4,
    visibility: 10000,
    wind_speed: 4.93,
    wind_deg: 8,
    wind_gust: 6.71,
    weather: [{
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d'
    }],
    pop: 0
  }, {
    dt: 1616227200,
    temp: -1.92,
    feels_like: -8.21,
    pressure: 1028,
    humidity: 55,
    dew_point: -10.15,
    uvi: 1.1,
    clouds: 8,
    visibility: 10000,
    wind_speed: 4.64,
    wind_deg: 14,
    wind_gust: 6.28,
    weather: [{
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d'
    }],
    pop: 0
  }, {
    dt: 1616230800,
    temp: -0.96,
    feels_like: -7.06,
    pressure: 1028,
    humidity: 48,
    dew_point: -10.91,
    uvi: 1.79,
    clouds: 33,
    visibility: 10000,
    wind_speed: 4.29,
    wind_deg: 18,
    wind_gust: 5.66,
    weather: [{
      id: 802,
      main: 'Clouds',
      description: 'scattered clouds',
      icon: '03d'
    }],
    pop: 0
  }, {
    dt: 1616234400,
    temp: -0.5,
    feels_like: -6.36,
    pressure: 1028,
    humidity: 45,
    dew_point: -11.2,
    uvi: 2.22,
    clouds: 50,
    visibility: 10000,
    wind_speed: 3.91,
    wind_deg: 16,
    wind_gust: 4.94,
    weather: [{
      id: 802,
      main: 'Clouds',
      description: 'scattered clouds',
      icon: '03d'
    }],
    pop: 0
  }, {
    dt: 1616238000,
    temp: 0.1,
    feels_like: -5.69,
    pressure: 1028,
    humidity: 43,
    dew_point: -11.15,
    uvi: 2.44,
    clouds: 60,
    visibility: 10000,
    wind_speed: 3.81,
    wind_deg: 11,
    wind_gust: 4.85,
    weather: [{
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04d'
    }],
    pop: 0
  }, {
    dt: 1616241600,
    temp: 0.69,
    feels_like: -5.03,
    pressure: 1028,
    humidity: 41,
    dew_point: -11.19,
    uvi: 2.27,
    clouds: 67,
    visibility: 10000,
    wind_speed: 3.7,
    wind_deg: 6,
    wind_gust: 4.69,
    weather: [{
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04d'
    }],
    pop: 0
  }, {
    dt: 1616245200,
    temp: 1.06,
    feels_like: -4.63,
    pressure: 1027,
    humidity: 41,
    dew_point: -10.76,
    uvi: 1.88,
    clouds: 100,
    visibility: 10000,
    wind_speed: 3.69,
    wind_deg: 2,
    wind_gust: 4.68,
    weather: [{
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d'
    }],
    pop: 0
  }, {
    dt: 1616248800,
    temp: 1.27,
    feels_like: -4.25,
    pressure: 1027,
    humidity: 42,
    dew_point: -10.49,
    uvi: 1.19,
    clouds: 100,
    visibility: 10000,
    wind_speed: 3.5,
    wind_deg: 358,
    wind_gust: 4.48,
    weather: [{
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d'
    }],
    pop: 0
  }, {
    dt: 1616252400,
    temp: 1.21,
    feels_like: -4.13,
    pressure: 1027,
    humidity: 43,
    dew_point: -10.08,
    uvi: 0.58,
    clouds: 100,
    visibility: 10000,
    wind_speed: 3.26,
    wind_deg: 357,
    wind_gust: 4.43,
    weather: [{
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d'
    }],
    pop: 0
  }, {
    dt: 1616256000,
    temp: 0.86,
    feels_like: -4.15,
    pressure: 1026,
    humidity: 46,
    dew_point: -9.75,
    uvi: 0.18,
    clouds: 100,
    visibility: 10000,
    wind_speed: 2.85,
    wind_deg: 355,
    wind_gust: 4.25,
    weather: [{
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d'
    }],
    pop: 0
  }, {
    dt: 1616259600,
    temp: -0.14,
    feels_like: -4.39,
    pressure: 1026,
    humidity: 55,
    dew_point: -8.52,
    uvi: 0,
    clouds: 100,
    visibility: 10000,
    wind_speed: 1.93,
    wind_deg: 340,
    wind_gust: 2.99,
    weather: [{
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d'
    }],
    pop: 0
  }, {
    dt: 1616263200,
    temp: -0.9,
    feels_like: -5.08,
    pressure: 1026,
    humidity: 62,
    dew_point: -7.7,
    uvi: 0,
    clouds: 97,
    visibility: 10000,
    wind_speed: 1.93,
    wind_deg: 325,
    wind_gust: 2.94,
    weather: [{
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04n'
    }],
    pop: 0
  }, {
    dt: 1616266800,
    temp: -1.12,
    feels_like: -4.9,
    pressure: 1026,
    humidity: 66,
    dew_point: -6.94,
    uvi: 0,
    clouds: 93,
    visibility: 10000,
    wind_speed: 1.44,
    wind_deg: 301,
    wind_gust: 2.25,
    weather: [{
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04n'
    }],
    pop: 0
  }, {
    dt: 1616270400,
    temp: -1.35,
    feels_like: -5.15,
    pressure: 1026,
    humidity: 69,
    dew_point: -6.7,
    uvi: 0,
    clouds: 67,
    visibility: 10000,
    wind_speed: 1.52,
    wind_deg: 269,
    wind_gust: 2.24,
    weather: [{
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04n'
    }],
    pop: 0
  }, {
    dt: 1616274000,
    temp: -1.37,
    feels_like: -5.63,
    pressure: 1026,
    humidity: 70,
    dew_point: -6.54,
    uvi: 0,
    clouds: 66,
    visibility: 10000,
    wind_speed: 2.19,
    wind_deg: 247,
    wind_gust: 3.29,
    weather: [{
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04n'
    }],
    pop: 0
  }, {
    dt: 1616277600,
    temp: -1.42,
    feels_like: -6,
    pressure: 1026,
    humidity: 71,
    dew_point: -6.42,
    uvi: 0,
    clouds: 66,
    visibility: 10000,
    wind_speed: 2.67,
    wind_deg: 234,
    wind_gust: 4.38,
    weather: [{
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04n'
    }],
    pop: 0
  }, {
    dt: 1616281200,
    temp: -1.44,
    feels_like: -6.25,
    pressure: 1025,
    humidity: 71,
    dew_point: -6.38,
    uvi: 0,
    clouds: 67,
    visibility: 10000,
    wind_speed: 3,
    wind_deg: 233,
    wind_gust: 5.39,
    weather: [{
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04n'
    }],
    pop: 0
  }, {
    dt: 1616284800,
    temp: -1.37,
    feels_like: -6.48,
    pressure: 1025,
    humidity: 71,
    dew_point: -6.36,
    uvi: 0,
    clouds: 68,
    visibility: 10000,
    wind_speed: 3.43,
    wind_deg: 239,
    wind_gust: 7.17,
    weather: [{
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04n'
    }],
    pop: 0
  }, {
    dt: 1616288400,
    temp: -1.45,
    feels_like: -6.9,
    pressure: 1024,
    humidity: 70,
    dew_point: -6.64,
    uvi: 0,
    clouds: 66,
    visibility: 10000,
    wind_speed: 3.88,
    wind_deg: 236,
    wind_gust: 8.66,
    weather: [{
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04n'
    }],
    pop: 0
  }, {
    dt: 1616292000,
    temp: -1.42,
    feels_like: -7.36,
    pressure: 1023,
    humidity: 65,
    dew_point: -7.58,
    uvi: 0,
    clouds: 76,
    visibility: 10000,
    wind_speed: 4.46,
    wind_deg: 236,
    wind_gust: 9.54,
    weather: [{
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04n'
    }],
    pop: 0
  }, {
    dt: 1616295600,
    temp: -1.03,
    feels_like: -7.39,
    pressure: 1021,
    humidity: 60,
    dew_point: -8.16,
    uvi: 0,
    clouds: 82,
    visibility: 10000,
    wind_speed: 4.97,
    wind_deg: 239,
    wind_gust: 10.25,
    weather: [{
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04n'
    }],
    pop: 0
  }, {
    dt: 1616299200,
    temp: -0.69,
    feels_like: -7.41,
    pressure: 1020,
    humidity: 57,
    dew_point: -8.38,
    uvi: 0,
    clouds: 86,
    visibility: 10000,
    wind_speed: 5.44,
    wind_deg: 246,
    wind_gust: 10.74,
    weather: [{
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04n'
    }],
    pop: 0
  }, {
    dt: 1616302800,
    temp: -0.91,
    feels_like: -7.96,
    pressure: 1020,
    humidity: 62,
    dew_point: -7.72,
    uvi: 0,
    clouds: 89,
    visibility: 10000,
    wind_speed: 6.02,
    wind_deg: 246,
    wind_gust: 11.98,
    weather: [{
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04n'
    }],
    pop: 0
  }, {
    dt: 1616306400,
    temp: -0.69,
    feels_like: -8.32,
    pressure: 1019,
    humidity: 64,
    dew_point: -7.06,
    uvi: 0.2,
    clouds: 90,
    visibility: 10000,
    wind_speed: 6.94,
    wind_deg: 249,
    wind_gust: 12.53,
    weather: [{
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d'
    }],
    pop: 0.02
  }, {
    dt: 1616310000,
    temp: -0.15,
    feels_like: -7.69,
    pressure: 1019,
    humidity: 72,
    dew_point: -4.96,
    uvi: 0.6,
    clouds: 100,
    visibility: 10000,
    wind_speed: 7.1,
    wind_deg: 256,
    wind_gust: 11.92,
    weather: [{
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d'
    }],
    pop: 0.11
  }, {
    dt: 1616313600,
    temp: 1.37,
    feels_like: -5.83,
    pressure: 1018,
    humidity: 70,
    dew_point: -3.89,
    uvi: 1.28,
    clouds: 100,
    visibility: 10000,
    wind_speed: 6.79,
    wind_deg: 254,
    wind_gust: 11.11,
    weather: [{
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d'
    }],
    pop: 0.1
  }, {
    dt: 1616317200,
    temp: 3.47,
    feels_like: -3.74,
    pressure: 1018,
    humidity: 62,
    dew_point: -3.33,
    uvi: 2.09,
    clouds: 91,
    visibility: 10000,
    wind_speed: 6.87,
    wind_deg: 257,
    wind_gust: 10.22,
    weather: [{
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d'
    }],
    pop: 0.1
  }, {
    dt: 1616320800,
    temp: 4.44,
    feels_like: -2.38,
    pressure: 1017,
    humidity: 64,
    dew_point: -2.1,
    uvi: 1.39,
    clouds: 93,
    visibility: 10000,
    wind_speed: 6.56,
    wind_deg: 261,
    wind_gust: 9.79,
    weather: [{
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d'
    }],
    pop: 0.1
  }, {
    dt: 1616324400,
    temp: 5.39,
    feels_like: -0.96,
    pressure: 1017,
    humidity: 71,
    dew_point: 0.04,
    uvi: 1.52,
    clouds: 94,
    visibility: 10000,
    wind_speed: 6.35,
    wind_deg: 275,
    wind_gust: 9.34,
    weather: [{
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d'
    }],
    pop: 0.1
  }, {
    dt: 1616328000,
    temp: 4.93,
    feels_like: -0.77,
    pressure: 1016,
    humidity: 81,
    dew_point: 1.61,
    uvi: 1.42,
    clouds: 96,
    visibility: 10000,
    wind_speed: 5.74,
    wind_deg: 277,
    wind_gust: 9.23,
    weather: [{
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d'
    }],
    pop: 0.16
  }, {
    dt: 1616331600,
    temp: 5,
    feels_like: -0.39,
    pressure: 1016,
    humidity: 82,
    dew_point: 1.8,
    uvi: 1.16,
    clouds: 99,
    visibility: 10000,
    wind_speed: 5.35,
    wind_deg: 277,
    wind_gust: 9.08,
    weather: [{
      id: 500,
      main: 'Rain',
      description: 'light rain',
      icon: '10d'
    }],
    pop: 0.44,
  }, {
    dt: 1616335200,
    temp: 5.02,
    feels_like: -0.05,
    pressure: 1015,
    humidity: 82,
    dew_point: 1.81,
    uvi: 0.74,
    clouds: 100,
    visibility: 10000,
    wind_speed: 4.9,
    wind_deg: 286,
    wind_gust: 9.11,
    weather: [{
      id: 500,
      main: 'Rain',
      description: 'light rain',
      icon: '10d'
    }],
    pop: 0.41,
  }, {
    dt: 1616338800,
    temp: 5.53,
    feels_like: 0.22,
    pressure: 1015,
    humidity: 74,
    dew_point: 0.84,
    uvi: 0.36,
    clouds: 99,
    visibility: 10000,
    wind_speed: 5.02,
    wind_deg: 314,
    wind_gust: 9.29,
    weather: [{
      id: 500,
      main: 'Rain',
      description: 'light rain',
      icon: '10d'
    }],
    pop: 0.39,
  }, {
    dt: 1616342400,
    temp: 4.82,
    feels_like: -1.04,
    pressure: 1015,
    humidity: 72,
    dew_point: -0.14,
    uvi: 0.22,
    clouds: 99,
    visibility: 10000,
    wind_speed: 5.58,
    wind_deg: 325,
    wind_gust: 9.64,
    weather: [{
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d'
    }],
    pop: 0.33
  }, {
    dt: 1616346000,
    temp: 3.42,
    feels_like: -1.94,
    pressure: 1015,
    humidity: 74,
    dew_point: -1.15,
    uvi: 0,
    clouds: 97,
    visibility: 10000,
    wind_speed: 4.66,
    wind_deg: 316,
    wind_gust: 9.61,
    weather: [{
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d'
    }],
    pop: 0.31
  }, {
    dt: 1616349600,
    temp: 2.82,
    feels_like: -2.1,
    pressure: 1016,
    humidity: 79,
    dew_point: -0.83,
    uvi: 0,
    clouds: 96,
    visibility: 10000,
    wind_speed: 4.1,
    wind_deg: 307,
    wind_gust: 9.05,
    weather: [{
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04n'
    }],
    pop: 0.28
  }, {
    dt: 1616353200,
    temp: 2.42,
    feels_like: -2.27,
    pressure: 1016,
    humidity: 87,
    dew_point: 0.11,
    uvi: 0,
    clouds: 100,
    visibility: 10000,
    wind_speed: 3.97,
    wind_deg: 301,
    wind_gust: 8.52,
    weather: [{
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04n'
    }],
    pop: 0.04
  }]
};