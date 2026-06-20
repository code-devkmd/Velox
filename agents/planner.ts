import { groq } from "@/providers/groq";
import { parseJson } from "@/lib/jsonParser";
import { Plan } from "@/types";

export async function planner(
    prompt: string
): Promise<Plan> {

    const response = await groq(
        `
You are a planning agent.

Extract:

subject
environment
style
mood
details

Return JSON only.
`,
        prompt
    );

    return parseJson(response);
}