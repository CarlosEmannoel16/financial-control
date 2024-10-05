import { CreditCard } from "../../../domain/creditCard/CreditCard";
import { BankRepository } from "../../../infra/repository/mongo/BankRepository";

export class GetCreditCardUseCase {
  constructor(private readonly bankRepository: BankRepository) {}

  async execute(bankId: string, creditCardId: string): Promise<any> {
    const creditCard = await this.bankRepository.getCreditCard(
      bankId,
      creditCardId
    );

    if (!creditCard) return null;

    return creditCard.getGraphData();
  }
}
