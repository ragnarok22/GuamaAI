export type Provider = 'openai';

export type Theme = 'light' | 'dark';

export type Config = {
  theme: Theme
  provider: Provider
  key: string | null
}
