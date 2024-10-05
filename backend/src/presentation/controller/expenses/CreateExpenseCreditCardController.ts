import { Request, Response } from "express";
import { BankRepository } from "../../../infra/repository/mongo/BankRepository";
import { CreateExpensesUseCase } from "../../../data/usecase/expenses/CreateExpensesUseCase";

export class CreateExpensesCreditCardController {
  constructor(private readonly createExpenseUseCase: CreateExpensesUseCase) {}

  async handle(request: Request, response: Response) {
    try {

      console.log(request.body);
      if (!request.body.bankId) throw new Error("bankId is required");
      if (!request.body.creditCardId)
        throw new Error("CreditCardId is required");
      if (!request.body.value) throw new Error("Value is required");
      if (!request.body.date) throw new Error("Date is required");

      await this.createExpenseUseCase.execute({
        bankId: request.body.bankId,
        creditCardId: request.body.creditCardId,
        category: request.body.category,
        date: request.body.date,
        name: request.body.name,
        value: request.body.value,
        numberOfTimes: request.body.numberOfTimes,
      });

      return response.status(201).json({ message: "Expense created" });
    } catch (error: any) {
      return response.status(500).json({ message: error.message });
    }
  }
}
