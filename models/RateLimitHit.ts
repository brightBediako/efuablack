import mongoose, { Schema, model, models } from "mongoose";

export type RateLimitHitDoc = {
  route: string;
  ipHash: string;
  createdAt: Date;
};

const schema = new Schema<RateLimitHitDoc>(
  {
    route: { type: String, required: true },
    ipHash: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { versionKey: false },
);

schema.index({ route: 1, ipHash: 1, createdAt: -1 });
schema.index({ createdAt: 1 }, { expireAfterSeconds: 3600 });

export const RateLimitHit = models.RateLimitHit ?? model<RateLimitHitDoc>("RateLimitHit", schema);
