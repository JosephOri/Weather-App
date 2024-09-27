export type ForecastResponse = {
    list: Array<{
      dt: number; // Timestamp in seconds
      main: {
        temp: number; // Current temperature
        feels_like: number; // Feels-like temperature
        temp_min: number; // Minimum temperature
        temp_max: number; // Maximum temperature
        humidity: number; // Humidity percentage
      };
      weather: Array<{
        main: string; // Main weather description (e.g., "Clear")
        description: string; // Detailed weather description (e.g., "clear sky")
        icon: string; // Weather icon
      }>;
      wind: {
        speed: number; // Wind speed in meters/second
        deg: number; // Wind direction in degrees
      };
      dt_txt: string; // Date and time in "YYYY-MM-DD HH:mm:ss" format
    }>;
    city: {
      name: string; // City name
      country: string; // Country code
    };
  };
  