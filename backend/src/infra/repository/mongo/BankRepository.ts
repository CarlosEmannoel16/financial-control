import { Bank } from "../../../domain/bank/Bank";
import { CreditCard } from "../../../domain/creditCard/CreditCard";
import { Expenses } from "../../../domain/expenses/Expenses";
import { BankInterface } from "../../../interfaces/domain/Bank/BankInterface";
import { BankModel } from "../../database/mongo/BankSchema";

export class BankRepository {
  async createBank(bank: BankInterface) {
    await BankModel.create({ name: bank.name, id: bank.id });
  }

  async getBankById(id: string) {
    const result = await BankModel.findOne({ id });

    if (!result) return null;
    const bank = new Bank(result.name, result.id);

    if (result.creditCards.length) {
      result.creditCards.forEach((creditCard) => {
        const card = new CreditCard(creditCard.name, creditCard.id);
        bank.addCreditCard(card);
      });
    }
    return bank;
  }

  async checkBankExists(id: string) {
    const bank = await BankModel.exists({ id });
    return bank;
  }

  async addCreditCard(bankId: string, creditCard: CreditCard) {
    const bank = await BankModel.findOne({ id: bankId });

    if (!bank) return null;

    bank.creditCards.push({ name: creditCard.name, id: creditCard.id });

    await bank.save();
  }

  async addExpense(bankId: string, creditCardId: string, expense: Expenses) {
    const bank = await BankModel.findOne({ id: bankId });

    if (!bank) return null;

    bank.creditCards.forEach((creditCard) => {
      if (creditCard.id === creditCardId) {
        creditCard.expenses.push({
          description: expense.name,
          value: expense.amount,
          date: expense.date,
          category: expense.category,
          numberOfTimes: expense.numberOfTimes,
          id: expense.id,
        });
      }
    });

    console.log(bank.creditCards[0].expenses);

    await bank.save();
  }

  async getCreditCard(
    bankId: string,
    creditCardId: string
  ): Promise<CreditCard | null> {
    const bank = await BankModel.findOne({
      id: bankId,
    });

    if (!bank) return null;

    const creditCard = bank.creditCards.find(
      (creditCard) => creditCard.id === creditCardId
    );

    if (!creditCard) return null;

    const bankInstance = new CreditCard(creditCard.name, creditCard.id);

    creditCard.expenses.forEach((expense) => {
      console.log(expense)
      bankInstance.addExpense(
        new Expenses(
          expense.id,
          expense.description,
          expense.value,
          expense.date,
          "",
          expense.numberOfTimes
        )
      );
    });


    return bankInstance;
  }

  async getExpense(bankId: string, creditCardId: string, expenseId: string) {
    const bank = await BankModel.findOne({
      id: bankId,
    });

    if (!bank) return null;

    let expenseResult;

    for (let creditCardCurrent of bank.creditCards) {
      if (creditCardCurrent.id === creditCardId) {
        for (let expense of creditCardCurrent.expenses) {
          if (expense.id === expenseId) {
            expenseResult = new Expenses(
              expense.id,
              expense.description,
              expense.value,
              expense.date,
              "",
              expense.numberOfTimes
            );
            break;
          }
        }
      }
    }

    return expenseResult;
  }
}
