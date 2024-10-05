import fs from "fs";
import { Bank } from "../../../domain/bank/Bank";
import { BankRepository } from "../../../infra/repository/mongo/BankRepository";

export class CreateBankUseCase {
  constructor(private readonly bankRepository: BankRepository) {}

  async execute(name: string) {
    const bank = new Bank(name, "");

    await this.bankRepository.createBank(bank);

    return bank.getGraphData();
  }
}
