import { BankRepository } from "../../../infra/repository/mongo/BankRepository";

export class GetAllCreditCardUseCase {
  constructor(private creditCardRepository: BankRepository) {}

  async execute() {
    const creditCards = await this.creditCardRepository.getAllCreditCards();
    return creditCards.map((creditCard) => {
      return creditCard.getGraphData();
    });
  }
}
