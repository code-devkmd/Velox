import { planner } from "@/agents/planner";
import { artDirector } from "@/agents/artDirector";
import { promptEngineer } from "@/agents/promptEngineer";

import { generateImage } from "@/providers/pollinations";

import { ProjectMemory } from "@/memory/projectMemory";

export async function runPipeline(
    userPrompt: string
) {

    const memory: ProjectMemory = {
        userPrompt,

        generations: [],
        technicalReviews: [],
        artisticReviews: [],
        driftReports: [],

        lessons: [],

        currentPrompt: ""
    };

    // STEP 1
    const plan =
        await planner(userPrompt);

    memory.plan = plan;

    // STEP 2
    const direction =
        await artDirector(plan);

    memory.artDirection = direction;

    // STEP 3
    const prompt =
        await promptEngineer(
            plan,
            direction
        );

    memory.currentPrompt = prompt;

    // STEP 4
    const imageUrl =
        await generateImage(prompt);

    memory.generations.push({
        prompt,
        imageUrl,
        iteration: 1
    });

    return memory;
}