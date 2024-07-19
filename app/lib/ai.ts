import { openai, createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';
import { Model } from './definitions';

export default class OpenAI {
  constructor(private readonly apiKey: string, private model: Model) { }

  public createOpenAI(): ReturnType<typeof createOpenAI> {
    return createOpenAI({
      apiKey: this.apiKey,
      compatibility: 'strict', // strict mode, enable when using the OpenAI API
    });
  }

  public getGPT3Model(): ReturnType<typeof openai> {
    return openai('gpt-3.5-turbo');
  }

  public getGPT4Model(): ReturnType<typeof openai> {
    return openai('gpt-4');
  }

  public getGPT4oModel(): ReturnType<typeof openai> {
    return openai('gpt-4o');
  }

  public async generateText(prompt: string): Promise<string> {
    const { text } = await generateText({
      model: openai(this.model),
      prompt,
    });

    return text;
  }
}
