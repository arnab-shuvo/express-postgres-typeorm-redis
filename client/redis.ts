import { createClient } from "redis";
import dotenv from "dotenv";
dotenv.config();

export const client = createClient({
  password: process.env.REDIS_PASSWORD,
});

export const initRedis = async () => {
  client.on("error", (err) => console.log("Redis Client Error", err));
  client.on("connect", () => console.log("Redis connected"));
  await client.connect();
};

export const setCache = async (key: string, value: any) => {
  await client.set(key, JSON.stringify(value), {
    EX: 60,
  });
};
export const getCache = async (key: string) => {
  return await client.get(key);
};
