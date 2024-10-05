import { EventEmitter } from "events";
import { BankRepository } from "../../infra/repository/mongo/BankRepository";
import { RedisClient } from "../../loaders/redisConnection";

export class EventHandler extends EventEmitter {
  private static instance: EventHandler;

  constructor() {
    super();
    this.updateEvent();
  }

  async updateEvent() {
    this.on("BankUpdated", async ({ bankId }) => {
      const repository = new BankRepository();
      const bank = await repository.getBankById(bankId);

      const redis = RedisClient.getInstance();
      redis.client.set(`bank:${bankId}`, JSON.stringify(bank));
    });
  }
}
