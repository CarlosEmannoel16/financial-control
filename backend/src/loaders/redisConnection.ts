import { createClient } from "redis";

export class RedisClient {
  private static instance: RedisClient;
  private clientRedis: any;

  private constructor() {
    this.clientRedis = createClient()
      .connect()
      .then(() => {
        console.log("Redis connected");
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  public static getInstance() {
    if (!RedisClient.instance) {
      RedisClient.instance = new RedisClient();
    }

    return RedisClient.instance;
  }

  public get client() {
    return this.clientRedis;
  }
}
