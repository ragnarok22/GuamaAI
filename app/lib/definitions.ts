export type Provider = 'openai';

export type Theme = 'light' | 'dark';

export type Model = 'gpt-3.5-turbo' | 'gpt-4' | 'gpt-4o';

export type Config = {
  theme: Theme
  provider: Provider
  key: string | null
}
