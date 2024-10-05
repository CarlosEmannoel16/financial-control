import { Request, Response } from "express";
import { CreateBankUseCase } from "../../../data/usecase/bank/CreateBankUseCase";

export class CreateBankController {
  constructor(private readonly createBankUseCase: CreateBankUseCase) {}

  async handle(req: Request, res: Response) {
    try {
        console.log(req.body);
      if (!req.body?.name) throw new Error("Name is required");
      const { name } = req.body;
      const bank = await this.createBankUseCase.execute(name);

      return res.status(201).json(bank);
    } catch (error: Error | any) {
      return res.status(400).json({ error: error.message });
    }
  }
}
