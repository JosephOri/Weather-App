export type ForecastResponse = {
  list: Array<{
    dt: number; // Timestamp in seconds
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      humidity: number;
    };
    weather: Array<{
      main: string;
      description: string;
      icon: string;
    }>;
    wind: {
      speed: number;
      deg: number;
    };
    dt_txt: string; // Date
  }>;
  city: {
    name: string;
    country: string;
  };
};
