import type { Config } from "drizzle-kit";
import { getDbUrl } from "./src/functions";

if (!process.env.PROD_POSTGRES_URL && !process.env.DEV_POSTGRES_URL) {
  throw new Error("Missing POSTGRES_URL");
}

export default {
  schema: "./src/schema.ts",
  out: "./.drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: { url: getDbUrl() as string, ssl: process.env.NODE_ENV === "production" ? "require" : undefined },
  casing: "snake_case",
} satisfies Config;
