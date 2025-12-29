import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import 'dotenv/config';

console.log('API Key loaded:', process.env.AI_GATEWAY_API_KEY ? 'Yes' : 'No');

const openrouter = createOpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: process.env.AI_GATEWAY_API_KEY,
});

async function main() {
    const result = streamText({
        model: openrouter('openai/gpt-4o-mini'),
        prompt: 'Invent a new holiday and describe its traditions.',
    });

    for await (const textPart of result.textStream) {
        process.stdout.write(textPart);
    }

    console.log();
    console.log('Token usage:', await result.usage);
    console.log('Finish reason:', await result.finishReason);
}

main().catch(console.error);
