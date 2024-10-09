import axios from "axios";

type ExpenseHttpParams = {
  amount: number;
  description: string;
  status: string;
  date: string;
  bankId: string;
  creditCardId: string;
};

export const createExpenseHttp = async (expense: ExpenseHttpParams) => {
  try {
    await axios.post("http://localhost:3001/expense", expense);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
