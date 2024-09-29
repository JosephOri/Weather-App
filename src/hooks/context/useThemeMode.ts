import { ThemeModeContext } from "../../context/ThemeModeContext";
import { useAbstractContext } from "./useAbstractContext";

export const useThemeMode = () => {
  return useAbstractContext(ThemeModeContext);
};
