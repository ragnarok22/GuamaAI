'use client'
import { useState } from "react"
import ConfigContext, { initialConfig } from "../lib/features/configs"

type ConfigLayoutProps = {
  children: React.ReactNode
}

const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
  const [config, setConfig] = useState(initialConfig);

  return (
    <ConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};

export default function ConfigLayout({ children }: ConfigLayoutProps) {
  return (
    <ConfigProvider>
      {children}
    </ConfigProvider>
  )
}
