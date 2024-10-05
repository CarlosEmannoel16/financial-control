import { Request, Response } from "express";
import { CreateCreditCardUseCase } from "../../../data/usecase/creditCard/CreateCreditCardUseCase";

export class CreateCreditCardController {
  constructor(
    private readonly createCreditCardUseCase: CreateCreditCardUseCase
  ) {}

  async handle(req: Request, res: Response) {
    try {
      if (!req.body?.name) throw new Error("Name is required");
      if (!req.body?.bankId) throw new Error("Bank id is required");
      const { name, bankId } = req.body;
      const creditCard = await this.createCreditCardUseCase.execute(
        name,
        bankId
      );

      res.status(200).json(creditCard);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
