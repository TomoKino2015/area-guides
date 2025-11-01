import { z } from "zod";

export const AreaFrontmatter = z.object({

  title: z.string(),

  locale: z.enum(["en","ja"]),

  status: z.enum(["Draft","Published"]),

  publishAt: z.string(), // ISO

  tags: z.array(z.string()).default([]),

  faq: z.array(z.object({ q: z.string(), a: z.string() })).default([])

});

export type AreaFrontmatter = z.infer<typeof AreaFrontmatter>;

