export class GlobalConstants {
  public static readonly apiKey: string = 'a12ba9e6391352df026c56f367f299a9';
  // public static readonly apiKey: string = 'eb35b0d62d965ee519f675c144eaa1e9'; // backup key
  public static readonly forecastDisplayedColumns: Array<string> = ['time', 'averageTemperature', 'windSpeed'];
  public static readonly unitList = [
    {
      name: 'Standard',
      value: 'standard'
    },
    {
      name: 'Metric',
      value: 'metric'
    },
    {
      name: 'Imperial',
      value: 'imperial'
    }
  ];
}
