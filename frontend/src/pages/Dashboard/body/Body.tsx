import "./index.css";
import { LastExpense } from "../LastExpenses/LastExpenses";
import { CreditCardArea } from "../ExpensesByCategory/ExpenseByCategory";
import { HistoryExpense } from "../ExpensesByMoth/ExpensesByMoth";
import { RegisterExpenseModal } from "../../Registers/OffCanvasAddExpenses/RegisterExpenseModal";

export const Body = () => {
  return (
    <div id="body-area">
      <h1>Dashboards</h1>
      <div>
        <div className="leftAreaBody">
          <LastExpense />
        </div>
        <div className="centralAreaBody">
          <CreditCardArea />
          <HistoryExpense />
        </div>
      </div>
      <RegisterExpenseModal />
    </div>
  );
};
