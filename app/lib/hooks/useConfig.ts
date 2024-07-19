import { useContext } from "react";
import ConfigContext from "../features/configs";

export default function useConfig() {
  const { config, setConfig } = useContext(ConfigContext);

  const updateKey = (key: string) => {
    setConfig({ ...config, key });
  }

  const toggleTheme = () => {
    setConfig({ ...config, theme: config.theme === "light" ? "dark" : "light" });
  }

  return { config, updateKey, toggleTheme };
}
