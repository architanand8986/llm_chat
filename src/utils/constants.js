export const GROQ_MODELS = [
  { id: 'llama-3.3-70b-versatile', name: 'Llama 3.3 70B' },
  { id: 'llama-3.1-8b-instant', name: 'Llama 3.1 8B Instant' },
  { id: 'meta-llama/llama-4-scout-17b-16e-instruct', name: 'Llama 4' },
  { id: 'gemma2-9b-it', name: 'Gemma 2 9B' },
  {id: 'compound-beta', name: 'Compound Beta'},
  { id: 'meta-llama/llama-4-maverick-17b-128e-instruct', name: 'Llama 4 maverick' },
  { id: 'openai/gpt-oss-20b', name: 'GPT OSS 20B' }
];

export const DEFAULT_MODEL = 'llama-3.3-70b-versatile';

export const CHAT_CONFIG = {
  temperature: 0.7,
  maxTokens: 1024,
  storageKey: 'chatHistory'
};
