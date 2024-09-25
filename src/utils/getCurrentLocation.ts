import { Coordinates } from "../types/Coordinates";

export const getCurrentLocation = (): Promise<Coordinates> => {
  return new Promise<Coordinates>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      }
    );
  });
};
