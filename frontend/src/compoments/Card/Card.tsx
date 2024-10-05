// import { useQuery } from "@apollo/client";
import { CardTransaction } from "../cardTransation/CardTransaction";
import "./index.css";
// import { GET_TRANSACTIONS } from "../../service/apollo/queries";

export const CardVertical = () => {
//   const { data } = useQuery(GET_TRANSACTIONS);

//   data?.transactions.map((transaction) => {
//     console.log(transaction);
//   });
  return (
    <div className="cardVerticalArea">
      <h3>Últimas despesas</h3>
      <div>
        <CardTransaction amount="R$3.5" description="Gasolina" />
        <CardTransaction amount="R$3.5" description="Gasolina" />
        <CardTransaction amount="R$3.5" description="Gasolina" />
        <CardTransaction amount="R$3.5" description="Gasolina" />
        <CardTransaction amount="R$3.5" description="Gasolina" />
        <CardTransaction amount="R$3.5" description="Gasolina" />
        <CardTransaction amount="R$3.5" description="Gasolina" />
        <CardTransaction amount="R$3.5" description="Gasolina" />
      </div>
    </div>
  );
};
