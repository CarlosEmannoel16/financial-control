import { GetAllExpensesUseCase } from "../../../data/usecase/expenses/GetAllExpensesUseCase";
import { GetExpensesByIdUseCase } from "../../../data/usecase/expenses/GetExpensesByIdUseCase";
import { BankRepository } from "../../../infra/repository/mongo/BankRepository";

type inputGetExpensesByCreditCardIdResolver = {
  id: string;
  bankId: string;
};

type inputGetExpenseByIdResolver = {
  bankId: string;
  creditCardId: string;
  expenseId: string;
};

export default {
  getExpensesByCreditCardId: async ({
    id,
    bankId,
  }: inputGetExpensesByCreditCardIdResolver) => {},

  getExpenseById: ({
    bankId,
    creditCardId,
    expenseId,
  }: inputGetExpenseByIdResolver) => {
    const useCase = new GetExpensesByIdUseCase(new BankRepository());
    return useCase.execute({
      bankId,
      creditCardId,
      expenseId,
    });
  },

  getAllExpenses: async () => {
    const useCase = new GetAllExpensesUseCase(new BankRepository());
    return useCase.execute();
  },
};
