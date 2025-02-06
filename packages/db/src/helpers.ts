import { pgTableCreator } from "drizzle-orm/pg-core";

export const pgTableHelper = pgTableCreator((name) => {
  const prefix = process.env.DB_TABLE_PREFIX || "";
  let normalizedPrefix = "";

  if (prefix !== "") {
    normalizedPrefix = prefix.endsWith("_") ? prefix : `${prefix}_`;
  }

  return `${normalizedPrefix}${name}`;
});
