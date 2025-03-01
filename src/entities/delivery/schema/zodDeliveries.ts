import { z } from "zod";

export const NewDeliveryBodySchema = z.object({
  ownerId: z.number(),
  week: z.number().int().positive(),
  firstTeammateId: z.number().optional(),
  secondTeammateId: z.number().optional(),
  frontRepoUrl: z.string().url().optional(),
  frontProductionUrl: z.string().url().optional(),
  backRepoUrl: z.string().url().optional(),
  backProductionUrl: z.string().url().optional(),
  sprint1TrelloUrl: z.string().url().optional(),
  sprint2TrelloUrl: z.string().url().optional(),
});

export type NewDeliveryBody = z.infer<typeof NewDeliveryBodySchema>;
