import { GetCreditCardUseCase } from "../../../data/usecase/creditCard/GetCreditCardUseCase";
import { BankRepository } from "../../../infra/repository/mongo/BankRepository";

export default {
  getCreditCardById: async ({ id, bankId }: { id: string; bankId: string }) => {
    console.log("id");
    const creditCard = new GetCreditCardUseCase(new BankRepository());

    const result = await creditCard.execute(bankId, id);
    return result;
  },
  getCreditCardByBank: async ({ bankId }: { bankId: string }) => {},
};
