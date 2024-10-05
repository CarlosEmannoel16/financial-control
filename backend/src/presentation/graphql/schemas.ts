import { buildSchema } from "graphql";

export const schemas = buildSchema(`
    type Expense {
      id: String
      value: String
      description: String
      date: String
      numberOfTimes: String
    }

    type CreditCard {
      id: String
      name: String
      value: String
      expenses: [Expense]
      }

    type Bank {
      id: String
      name: String
      value: Int
      creditCards: [CreditCard]
    }

    
    type Query {
      getBankById(id: String): Bank
      getAllBanks: [Bank]

      getCreditCardById(id: String, bankId: String): CreditCard
      getCreditCardByBank(bankId: String): [CreditCard]

      getExpensesByCreditCardId(id: String): [Expense]
      getExpenseById(bankId: String, creditCardId: String, ExpenseId: String): Expense
    }
`);
