import { Express, Request, Response, Router } from "express";
import { CreateBankUseCase } from "./src/data/usecase/bank/CreateBankUseCase";
import { BankRepository } from "./src/infra/repository/mongo/BankRepository";
import { CreateBankController } from "./src/presentation/controller/bank/CreateBankController";
import { CreateCreditCardUseCase } from "./src/data/usecase/creditCard/CreateCreditCardUseCase";
import { CreateCreditCardController } from "./src/presentation/controller/creditCard/CreateCreditCardController";
import { CreateExpensesUseCase } from "./src/data/usecase/expenses/CreateExpensesUseCase";
import { CreateExpensesCreditCardController } from "./src/presentation/controller/expenses/CreateExpenseCreditCardController";

export const routes = (app: Router) => {
  app.post("/bank", async (req: Request, res: Response) => {
    const useCase = new CreateBankUseCase(new BankRepository());
    const controller = new CreateBankController(useCase);
    await controller.handle(req, res);
  });

  app.post("/credit-card", async (req: Request, res: Response) => {
    const useCase = new CreateCreditCardUseCase(new BankRepository());
    const controller = new CreateCreditCardController(useCase);
    await controller.handle(req, res);
  });

  app.post("/expenses", async (req: Request, res: Response) => {
    const useCase = new CreateExpensesUseCase(new BankRepository());
    const controller = new CreateExpensesCreditCardController(useCase);
    await controller.handle(req, res);
  });
};
