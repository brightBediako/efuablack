import mongoose from "mongoose";
import { getMongoUri } from "@/config/env";

type MongooseCache = { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };

const globalForMongoose = globalThis as typeof globalThis & { __efuaMongoose?: MongooseCache };

if (!globalForMongoose.__efuaMongoose) {
  globalForMongoose.__efuaMongoose = { conn: null, promise: null };
}

const cache = globalForMongoose.__efuaMongoose;

export async function connectDB(): Promise<typeof mongoose> {
  const uri = getMongoUri();
  if (!uri) {
    throw new Error("MONGODB_URI is not set");
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
