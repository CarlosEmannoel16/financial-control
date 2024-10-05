import { BankRepository } from "../../../infra/repository/mongo/BankRepository";

export class GetBankByIdUseCase {
  constructor(private readonly bankRepository: BankRepository) {}
  async execute(id: string) {
    if (!id) {
      throw new Error("Id is required");
    }

    const bank = await this.bankRepository.getBankById(id);

    if (!bank) {
      throw new Error("Bank not found");
    }

    return bank.getGraphData();
  }
}
