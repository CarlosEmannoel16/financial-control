export class Expenses {
  private _name!: string;
  private _amount!: number;
  private _date!: Date;
  private _category?: string;
  private _id!: string;
  private _numberOfTimes = 1;
  private _status: "paid" | "unpaid" = "unpaid";

  constructor(
    id: string,
    name: string,
    amount: number,
    date: Date,
    category?: string,
    numberOfTimes?: number,
    status: "paid" | "unpaid" = "unpaid"
  ) {
    this._name = name;
    this._amount = amount;
    this._date = date;
    this._category = category;
    this._id = id;
    this._numberOfTimes = numberOfTimes || 1;
    this._status = status;

    if (!this._id) {
      this._id = Math.random().toString(36).substr(2, 9);
    }
  }

  get id(): string {
    return this._id;
  }

  get numberOfTimes(): number {
    return this._numberOfTimes;
  }

  changeNumberOfTimes(value: number) {
    this._numberOfTimes = value;
  }

  get name(): string {
    return this._name;
  }

  changeName(value: string) {
    this._name = value;
  }

  changeStatus(value: "paid" | "unpaid") {
    this._status = value;
  }

  get amount(): number {
    return this._amount;
  }

  changeAmount(value: number) {
    this._amount = value;
  }

  get date(): Date {
    return this._date;
  }

  changeDate(value: Date) {
    this._date = value;
  }

  get category(): string {
    return this._category || "Sem categoria";
  }

  changeCategory(value: string) {
    this._category = value;
  }

  getGraphData() {
    return {
      id: this._id,
      description: this._name,
      value: this._amount,
      category: this._category,
      date: new Date(this._date).toLocaleDateString(),
      numberOfTimes: this._numberOfTimes,
      status: this._status,
    };
  }
}
