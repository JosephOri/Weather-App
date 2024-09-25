export type Weather = {
  weather: {
    main: string;
    description: string;
  };
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  conditions: string;
};
