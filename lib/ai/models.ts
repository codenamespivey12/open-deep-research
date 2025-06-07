// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'gpt-4.1',
    label: 'sixtyoneeighty',
    apiIdentifier: 'gpt-4.1',
    description: 'For complex, multi-step tasks',
  },
] as const;

export const reasoningModels: Array<Model> = [
  {
    id: 'o3',
    label: 'o3',
    apiIdentifier: 'o3',
    description: 'For deep reasoning and complex, multi-step tasks',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'gpt-4.1';
export const DEFAULT_REASONING_MODEL_NAME: string = 'o3';
