import { Coordinates } from "../types/Coordinates";

export const getCurrentLocation = (): Promise<Coordinates> => {
  return new Promise<Coordinates>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      }
    );
  });
};
