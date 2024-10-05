import { Expenses } from "../../../domain/expenses/Expenses";
import { BankRepository } from "../../../infra/repository/mongo/BankRepository";

export interface ParamsCreateExpensesUseCase {
  value: number;
  name: string;
  date: Date;
  category: string;
  bankId: string;
  creditCardId: string;
  numberOfTimes?: number;
}

export class CreateExpensesUseCase {
  constructor(private readonly bankRepository: BankRepository) {}

  async execute(data: ParamsCreateExpensesUseCase) {
    const expenses = new Expenses(
      "",
      data.name,
      data.value,
      data.date,
      data.category,
      data.numberOfTimes || 1
    );

    await this.bankRepository.addExpense(data.bankId, data.creditCardId, expenses);
  }
}
