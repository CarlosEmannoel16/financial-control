import { BankRepository } from "../../../infra/repository/mongo/BankRepository";
export type inputGetExpensesByIdUseCase = {
  bankId: string;
  creditCardId: string;
  expenseId: string;
};

export class GetExpensesByIdUseCase {
  constructor(private readonly bankRepository: BankRepository) {}

  async execute(params: inputGetExpensesByIdUseCase) {
    if (!params.bankId) throw new Error("bankId is required");
    if (!params.creditCardId) throw new Error("creditCardId is required");
    if (!params.expenseId) throw new Error("expenseId is required");

    const expense = await this.bankRepository.getExpense(
      params.bankId,
      params.creditCardId,
      params.expenseId
    );

    return expense?.getGraphData();
  }
}
