import { z } from "zod";

export const NewDeliveryBodySchema = z.object({
  ownerId: z.number(),
  week: z.number().int().positive(),
  firstTeammateId: z.number().optional(),
  secondTeammateId: z.number().optional(),
  frontRepoUrl: z.string().optional(),
  frontProductionUrl: z.string().optional(),
  backRepoUrl: z.string().optional(),
  backProductionUrl: z.string().optional(),
  sprint1TrelloUrl: z.string().optional(),
  sprint2TrelloUrl: z.string().optional(),
});

export type NewDeliveryBody = z.infer<typeof NewDeliveryBodySchema>;
