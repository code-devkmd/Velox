import { groq } from "@/providers/groq";
import { parseJson } from "@/lib/jsonParser";

export async function artDirector(
    plan: any
) {

    const response = await groq(
        `
You are an award-winning art director.

Return JSON only.

{
 "camera":"",
 "focus":"",
 "lighting":"",
 "mood":"",
 "story":""
}
`,
        JSON.stringify(plan)
    );

    return parseJson(response);
}