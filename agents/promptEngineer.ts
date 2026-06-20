import { groq } from "@/providers/groq";

export async function promptEngineer(
    plan: any,
    direction: any
) {

    return groq(
        `
Generate a diffusion-model image prompt.

Rules:
- comma separated keywords
- concise
- avoid complete sentences
- prioritize visual descriptions
- max 80 words

Return only the prompt.
`,
        JSON.stringify({
            plan,
            direction
        })
    );
}