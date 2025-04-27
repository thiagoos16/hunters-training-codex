import { z } from "zod";

export const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']),
    PORT: z.string().default('3000'),
    DATABASE_URL: z.string().url(),
})