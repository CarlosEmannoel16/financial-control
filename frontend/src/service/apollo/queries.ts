import { gql } from "@apollo/client";

export const GET_CREDIT_CARD_BY_ID = gql`
  query GetCreditCardById($id: String!, $bankId: String!) {
    getCreditCardById(id: $id, bankId: $bankId) {
      name
      value
      expenses {
        id
        description
        value
        numberOfTimes
        date
      }
    }
  }
`;

export const GET_ALL_EXPENSES = gql`
  query GetAllExpenses {
    getAllExpenses {
      id
      description
      value
      date
      numberOfTimes
    }
  }
`;

export const GET_ALL_CREDIT_CARDS = gql`
  query GetAllCreditCards {
    getAllCreditCards {
      id
      name
    }
  }
`;
