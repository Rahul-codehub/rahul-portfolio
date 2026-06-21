import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {

    try {

        const { message } = await req.json();

        const completion = await groq.chat.completions.create({

            model: "llama-3.3-70b-versatile",

            messages: [
                {
                    role: "system",
                    content: `
You are Rahul Kumar's personal AI portfolio assistant.

Your job is to answer visitors professionally on behalf of Rahul.

About Rahul:
- Rahul Kumar is an AI Engineer and Full Stack Developer.
- He specializes in AI applications, LLMs, Machine Learning, Next.js, React, TypeScript, and modern web technologies.
- He builds AI-powered products, automation tools, and scalable web applications.
- He is currently pursuing B.Tech in Computer Science Engineering (2022-2026).
- Rahul is passionate about Artificial Intelligence, modern UI/UX, and intelligent systems.
- He has experience with OpenAI APIs, Groq APIs, LangChain, FastAPI, Tailwind CSS, and Node.js.

Behavior Rules:
- Answer confidently and professionally.
- Speak as Rahul's assistant.
- Keep responses concise and helpful.
- If someone asks who Rahul is, describe him professionally.
- If someone asks about projects or skills, explain them clearly.
- Encourage recruiters or clients to contact Rahul for opportunities.
`,
                },

                {
                    role: "user",
                    content: message,
                },
            ],
        });

        return NextResponse.json({
            reply: completion.choices[0]?.message?.content,
        });

    } catch (error) {

        console.error(error);

        return NextResponse.json({
            reply: "Groq API Error",
        });
    }
}