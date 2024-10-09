import { useQuery } from "@apollo/client";
import { CardTransaction } from "./cardTransation/CardTransaction";
import "./index.css";
import { GET_ALL_EXPENSES } from "../../../service/apollo/queries";
import { useEffect, useState } from "react";

export const LastExpense = () => {
  const [expense, setExpense] = useState([]);
  const { loading, error, data } = useQuery(GET_ALL_EXPENSES);
  console.log(data);

  useEffect(() => {
    if (data?.getAllExpenses) {
      setExpense(data.getAllExpenses);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="cardVerticalArea">
      <div className="headerCard">
        <h3>Últimas despesas</h3>
      
      </div>

      <div>
        {expense.length > 0 ? (
          expense.map(
            (item: { value: string; description: string; date: string }) => {
              return (
                <CardTransaction
                  amount={item?.value}
                  description={item.description}
                  status="Pago"
                  date={item.date}
                />
              );
            }
          )
        ) : (
          <p>Não há despesas</p>
        )}
      </div>
    </div>
  );
};
