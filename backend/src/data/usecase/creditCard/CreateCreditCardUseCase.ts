import { CreditCard } from "../../../domain/creditCard/CreditCard";
import { BankRepository } from "../../../infra/repository/mongo/BankRepository";

export class CreateCreditCardUseCase {
  constructor(private readonly bankRepository: BankRepository) {}

  async execute(name: string, bankId: string) {
    const bank = await this.bankRepository.checkBankExists(bankId);
    console.log(bank);
    if (!bank?._id) throw new Error("Bank not found");

    const creditCard = new CreditCard("", name);


    await this.bankRepository.addCreditCard(bankId, creditCard);

    return creditCard.getGraphData();
  }
}
