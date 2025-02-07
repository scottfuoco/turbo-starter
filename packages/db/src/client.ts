import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema";

const dbUrl = process.env.POSTGRES_URL;

if (!dbUrl) {
  throw new Error("No POSTGRES_URL environment variable found");
}

export const queryClient = postgres(dbUrl, {
  max: 20,
  idle_timeout: 20,
  ssl: process.env.NODE_ENV === "production" ? "require" : undefined,
});

declare global {
  var _db: ReturnType<typeof drizzle> | undefined;
}

const createDb = (() => {
  return () => {
    if (!global._db) {
      const client = postgres(dbUrl, { prepare: false });
      global._db = drizzle(client, { schema, casing: "snake_case" });
    }
    return global._db;
  };
})();

const db = createDb();

export { db };
