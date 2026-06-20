export interface Plan {
    subject: string;
    environment: string;
    style: string;
    mood: string;
    details: string[];
}

export interface ArtDirection {
    camera: string;
    focus: string;
    lighting: string;
    mood: string;
    story: string;
}

export interface TechnicalReview {
    composition: number;
    lighting: number;
    detail: number;
    anatomy: number;

    strengths: string[];
    weaknesses: string[];
}

export interface ArtisticReview {
    storytelling: number;
    emotion: number;
    focus: number;

    strengths: string[];
    weaknesses: string[];
}

export interface DriftReport {
    drift: boolean;
    issues: string[];
}

export interface Generation {
    prompt: string;
    imageUrl: string;
    iteration: number;
}