const GROQ_API =
    "https://api.groq.com/openai/v1/chat/completions";

export async function groq(
    system: string,
    user: string
) {

    const res = await fetch(GROQ_API, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "system",
                    content: system
                },
                {
                    role: "user",
                    content: user
                }
            ]
        })
    });

    const data = await res.json();

    return data.choices[0].message.content;
}