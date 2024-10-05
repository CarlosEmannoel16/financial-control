import { gql } from "@apollo/client";

export const GET_TRANSACTIONS = gql`
  query {
   getCreditCardById(id: "8v2p3x6ap", bankId: "07i41kmzo") {
    name,
    value,
    expenses {
      id,
      description,
      value,
      numberOfTimes,
      date
    }
  }
  }
`;
