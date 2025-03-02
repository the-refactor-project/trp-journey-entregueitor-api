import { z } from "zod";

export const NewDeliveryBodySchema = z.object({
  ownerId: z.number(),
  week: z.number().int().positive(),
  firstTeammateId: z.number().optional().nullable(),
  secondTeammateId: z.number().optional().nullable(),
  frontRepoUrl: z.string().optional().nullable(),
  frontProductionUrl: z.string().optional().nullable(),
  backRepoUrl: z.string().optional().nullable(),
  backProductionUrl: z.string().optional().nullable(),
  sprint1TrelloUrl: z.string().optional().nullable(),
  sprint2TrelloUrl: z.string().optional().nullable(),
});

export type NewDeliveryBody = z.infer<typeof NewDeliveryBodySchema>;
