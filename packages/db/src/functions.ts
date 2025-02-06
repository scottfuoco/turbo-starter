export function getDbUrl() {
  if (!process.env.PROD_POSTGRES_URL && !process.env.DEV_POSTGRES_URL) {
    throw new Error("Missing POSTGRES_URL or DEV_POSTGRES_URL");
  }

  const dbUrl = process.env.NODE_ENV === "production" ? process.env.PROD_POSTGRES_URL : process.env.DEV_POSTGRES_URL;

  if (dbUrl) {
    return dbUrl;
  }
  if (!dbUrl) {
    throw new Error("No database url found");
  }
}
