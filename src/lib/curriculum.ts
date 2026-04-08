import { CURRICULUM_DAYS } from "./curriculum-days";
import type { CurriculumDay } from "./types";

export { CURRICULUM_DAYS, ELEVEN_AGENTS, PROGRAM_OVERVIEW, POST_PROGRAM } from "./curriculum-days";

export function getDay(day: number): CurriculumDay | undefined {
  return CURRICULUM_DAYS.find((d) => d.day === day);
}
