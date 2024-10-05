import { Expenses } from "../expenses/Expenses";

export class CreditCard {
  private _id: string;
  private _name: string;
  private _expenses: Expenses[];

  constructor(id: string, name: string) {
    this._name = name;
    this._id = id;
    this._expenses = [];

    if (!this.id) {
      this._id = Math.random().toString(36).substr(2, 9);
    }
  }

  addExpense(expense: Expenses) {
    this._expenses.push(expense);
  }

  getExpenses(): Expenses[] {
    return this._expenses;
  }

  removeExpense(expense: Expenses) {
    const index = this._expenses.indexOf(expense);
    this._expenses.splice(index, 1);
  }

  get name(): string {
    return this._name;
  }

  setName(value: string) {
    this._name = value;
  }

  get id(): string {
    return this._id;
  }

  getGraphData() {
    return {
      id: this._id,
      name: this._name,
      value: this._expenses.reduce((acc, expense) => acc + expense.amount, 0),
      expenses: this._expenses.map((expense) => expense.getGraphData()),
    };
  }
}
