import Image from "next/image";
import { runPipeline } from "@/orchestrator/generationPipeline";

export default async function Home() {

  const memory = await runPipeline(
    "Cyberpunk samurai in rain"
  );

  const image =
    memory.generations[0];

  return (
    <main className="p-8">
      <h1>Image Agent Demo</h1>

      <h2>User Prompt</h2>
      <p>{memory.userPrompt}</p>

      <h2>Generated Prompt</h2>
      <p>{memory.currentPrompt}</p>

      <h2>Generated Image</h2>

      <Image
        src={image.imageUrl}
        width={400}
        height={400}
        alt="generated image"
      />

      <h2>Debuging</h2>
      <pre>
        {JSON.stringify(memory.plan, null, 2)}
      </pre>

      <pre>
        {JSON.stringify(memory.artDirection, null, 2)}
      </pre>

      <p>{memory.currentPrompt}</p>
    </main>
  );
}