import { config } from 'dotenv';
config();
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { PromptTemplate } from '@langchain/core/prompts';

const model = new ChatGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_API_KEY,
    model: 'gemini-2.5-flash',
});

const prompt = PromptTemplate.fromTemplate(`
    explain the {topic} in very simple way like ELI5
    make sure to include the core concepts and avoid unnecessary jargon
    make the answer concise as possible and easy to understand
    `)

prompt.pipe(model).invoke({ topic: "quantum computing" }).then((res) => {
    console.log(res.content);
}).catch((err) => {
    console.log(err);
});
