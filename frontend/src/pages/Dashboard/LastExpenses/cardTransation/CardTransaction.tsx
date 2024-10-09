import { Tag } from "../../../../compoments/tag/Tag";
import "./index.css";

type typeProps = {
  amount: string;
  description: string;
  status: string;
  date: string;
};

export const CardTransaction = (params: typeProps) => {
  return (
    <div className="cardTransaction">
      <div
        style={{
          flex: "1",
        }}
      >
        <Tag label={params.status}  type="pago"/>
      </div>
      <div
        style={{
          flex: "6",
        }}
      >
        <label>{params.description}</label>
      </div>
      <div
        style={{
          flex: "2",
          fontWeight: "bold",
        }}
      >
        <label>R$ {params.amount}</label>
      </div>
      <div
        style={{
          flex: "2",
        }}
      >
        <label>{params.date}</label>
      </div>
    </div>
  );
};
