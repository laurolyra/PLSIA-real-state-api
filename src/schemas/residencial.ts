import * as z from 'zod';

export const PropertySchema = z.object({
  price: z.number().gte(100),
  address: z.string(),
});
