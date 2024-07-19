import { createContext, useState } from "react";
import { Config } from "../definitions";

export const initialConfig: Config = {
  theme: "light",
  provider: "openai",
  key: null,
}

const ConfigContext = createContext({
  config: initialConfig,
  setConfig: (config: Config) => { },
});

export default ConfigContext;
