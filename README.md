# Velox

**Velox** is a *multi-agent image generation system* that
iteratively improves images through planning,
art direction, critique, prompt refinement,
and memory-based learning.

Instead of generating a single image from a prompt,
Velox simulates a creative team:

```bash
            User Prompt
                ↓
            Planner
                ↓
            Art Director
                ↓
            Prompt Engineer
                ↓
            Image Generator
                ↓
            Critics
                ↓
            Refiner
                ↓
            Improved Image
```

The system continuously learns from previous
generations to reduce prompt drift and improve
artistic quality.