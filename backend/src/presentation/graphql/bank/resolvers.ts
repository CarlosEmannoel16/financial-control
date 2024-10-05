import { GetBankByIdUseCase } from "../../../data/usecase/bank/GetBankByIdUseCase";
import { BankRepository } from "../../../infra/repository/mongo/BankRepository";

export default {
  getBankById: async (args: { id: string }) => {
    const bankRepository = new BankRepository();
    const bankUseCase = new GetBankByIdUseCase(bankRepository);
    return bankUseCase.execute(args.id);
  },

  getAllBanks: () => {
    return [
      {
        id: "1",
        name: "Credit Card 1",
      },
      {
        id: "2",
        name: "Credit Card 2",
      },
    ];
  },
};
