import mongoose from "mongoose";
import { getMongoUri } from "@/config/env";

/** Thrown when `MONGODB_URI` is missing from the server environment (e.g. Vercel env vars). */
export class MongoNotConfiguredError extends Error {
  readonly code = "MONGO_NOT_CONFIGURED" as const;
  constructor() {
    super("MONGODB_URI is not set");
    this.name = "MongoNotConfiguredError";
  }
}

type MongooseCache = { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };

const globalForMongoose = globalThis as typeof globalThis & { __efuaMongoose?: MongooseCache };

if (!globalForMongoose.__efuaMongoose) {
  globalForMongoose.__efuaMongoose = { conn: null, promise: null };
}

const cache = globalForMongoose.__efuaMongoose;

export async function connectDB(): Promise<typeof mongoose> {
  const uri = getMongoUri();
  if (!uri) {
    throw new MongoNotConfiguredError();
  }

  if (cache.conn) {
    return cache.conn;
  }

  if (!cache.promise) {
    cache.promise = mongoose.connect(uri);
  }

  cache.conn = await cache.promise;
  return cache.conn;
}
