export type CurriculumDay = {
  day: number;
  title: string;
  focus: string;
  /** One-line result participants should achieve by end of day */
  outcome: string;
  objectives: string[];
  /** Ideas tied to the source video (lifelogging, feeding data to a local agent) */
  videoIdeas: string[];
  /** Ordered checklist the cohort executes in session or async */
  practicalSteps: string[];
  morningWorkshop: { morning: string[]; workshop: string[] };
  /** Afternoon block (bootcamp days are often split morning/afternoon) */
  afternoonWorkshop?: string[];
  groupActivity?: string[];
  securitySession?: string[];
  homework: string[];
  eveningOptional: string;
  facilitatorNotes: string[];
  deliverables: string[];
};
