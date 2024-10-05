import { BankInterface } from "../../interfaces/domain/Bank/BankInterface";
import { CreditCard } from "../creditCard/CreditCard";

export class Bank implements BankInterface {
  private _name: string;
  private _amount: number = 0;
  private _id: string;
  private creditCard: CreditCard[];

  constructor(name: string, id: string) {
    this._name = name;
    this._amount = 0;
    this.creditCard = [];
    this._id = id;
    if (!this._id) {
      this._id = Math.random().toString(36).substr(2, 9);
    }
  }

  get name(): string {
    return this._name;
  }

  changeName(value: string) {
    this._name = value;
  }

  get amount(): number {
    return this._amount;
  }

  get id(): string {
    return this._id;
  }
  addCreditCard(creditCard: CreditCard) {
    this.creditCard.push(creditCard);
  }

  getGraphData() {
    return {
      id: this._id,
      name: this._name,
      value: 0,
      creditCards: this.creditCard.map((card) => card.getGraphData()),
    };
  }
}
