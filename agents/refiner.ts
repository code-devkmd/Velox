import { groq } from "@/providers/groq";

export async function refiner(
    prompt: string,
    lessons: string[]
) {

    return groq(
        `
Improve the prompt.

Preserve strengths.

Fix weaknesses.

Return prompt only.
`,
        JSON.stringify({
            prompt,
            lessons
        })
    );
}