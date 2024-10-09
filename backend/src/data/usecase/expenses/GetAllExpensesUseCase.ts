import { BankRepository } from "../../../infra/repository/mongo/BankRepository";

export class GetAllExpensesUseCase {
  constructor(private readonly bankRepository: BankRepository) {}
  async execute() {
    const allExpenses = await this.bankRepository.getAllExpenses();


    console.log(allExpenses);
    return allExpenses.map((expense) => {
      return expense.getGraphData();
    });
  }
}
