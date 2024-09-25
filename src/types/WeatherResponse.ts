export type WeatherResponse = {
  coords: {
    lat: number;
    lon: number;
  };
  weather: [
    {
      main: string;
      description: string;
    }
  ];
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  conditions: string;
  name: string;
};
