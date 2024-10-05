import bankResolver from "./bank/resolvers";
import  creditCardResolver from "./creditCard/resolvers";
import  expenseResolver from "./expenses/resolvers";

export default {
  ...bankResolver,
  ...creditCardResolver,
  ...expenseResolver
};
