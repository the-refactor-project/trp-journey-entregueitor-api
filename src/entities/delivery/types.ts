import { Id } from "../../types.js";

export interface Delivery {
  id: Id;
  ownerId: number;
  week: number;
  firstTeammateId: number | null;
  secondTeammateId: number | null;
  frontRepoUrl: string | null;
  frontProductionUrl: string | null;
  backRepoUrl: string | null;
  backProductionUrl: string | null;
  sprint1TrelloUrl: string | null;
  sprint2TrelloUrl: string | null;
  sprint3TrelloUrl: string | null;
  sprint4TrelloUrl: string | null;
  figmaUrl: string | null;
  projectName: string | null;
  date: Date;
}
