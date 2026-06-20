import {
    Plan,
    ArtDirection,
    Generation,
    TechnicalReview,
    ArtisticReview,
    DriftReport
} from "@/types";

export interface ProjectMemory {

    userPrompt: string;

    plan?: Plan;

    artDirection?: ArtDirection;

    generations: Generation[];

    technicalReviews: TechnicalReview[];

    artisticReviews: ArtisticReview[];

    driftReports: DriftReport[];

    lessons: string[];

    currentPrompt: string;
}