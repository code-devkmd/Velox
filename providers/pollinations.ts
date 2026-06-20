export async function generateImage(
    prompt: string
): Promise<string> {

    const encoded =
        encodeURIComponent(prompt);

    return `https://image.pollinations.ai/prompt/${encoded}`;
}