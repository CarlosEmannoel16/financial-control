import "./index.css";
import { CardVertical } from "../Card/Card";
import { CreditCardArea } from "../creditCardArea/CreditCardArea";
import { HistoryExpense } from "../historyExpenses/HistoryExpense";

export const Body = () => {
  return (
    <div id="body-area">
      <div className="leftAreaBody">
        <CardVertical />
      </div>
      <div className="centralAreaBody">
        <CreditCardArea />
        <HistoryExpense />
      </div>
    </div>
  );
};
