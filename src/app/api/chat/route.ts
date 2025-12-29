import { NextRequest } from 'next/server';
import { PROFILE_CONTEXT } from '@/lib/profile-context';

export async function POST(req: NextRequest) {
    console.log('=== Chat API Request ===');

    try {
        const body = await req.json();
        const { messages } = body;

        if (!messages || !Array.isArray(messages)) {
            return new Response(
                JSON.stringify({ error: 'Messages array required' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        console.log('Processing', messages.length, 'messages');

        // Direct fetch to OpenRouter
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
            },
            body: JSON.stringify({
                model: 'openai/gpt-4o-mini',
                messages: [
                    { role: 'system', content: PROFILE_CONTEXT },
                    ...messages.map((m: { role: string; content: string }) => ({
                        role: m.role,
                        content: m.content,
                    })),
                ],
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('OpenRouter error:', errorText);
            throw new Error(`OpenRouter returned ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        const text = data.choices?.[0]?.message?.content || 'No response generated';

        console.log('Response generated, length:', text.length);

        return new Response(
            JSON.stringify({ response: text }),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    } catch (error) {
        console.error('=== Chat API Error ===');
        console.error('Error:', error);

        return new Response(
            JSON.stringify({
                error: 'Failed to process chat request',
                details: (error as Error)?.message || 'Unknown error'
            }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
