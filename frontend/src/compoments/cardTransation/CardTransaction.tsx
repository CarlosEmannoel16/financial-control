import "./index.css";

type typeProps = {
  amount: string;
  description: string;
};

export const CardTransaction = (params: typeProps) => {
  return (
    <div className="cardTransaction">
      <div className="classNameLeftCardTransaction">
        <label>{params.description}</label>
      </div>
      <div className="classNameRightCardTransaction">
        <label>{params.amount}</label>
      </div>
    </div>
  );
};
