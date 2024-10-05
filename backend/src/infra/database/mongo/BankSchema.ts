import { Schema, model } from "mongoose";

export const ExpenseSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  numberOfTimes: {
    type: Number,
    required: true,
  },
});

export const CreditCardSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    expenses: { type: [ExpenseSchema], default: [] },
  },
  { timestamps: true }
);

const BankSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },

    userId: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    creditCards: { type: [CreditCardSchema], default: [] },
  },
  { timestamps: true }
);

export const BankModel = model("Bank", BankSchema);
