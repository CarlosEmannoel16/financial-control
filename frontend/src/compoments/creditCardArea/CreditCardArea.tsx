import { CreditCard } from "../creditCard/CreditCard";
import "./index.css";

export const CreditCardArea = () => {
  return (
    <div id="credit-card-area">
      <div className="title-credit-cart-area">
        <label>Cartões</label>
      </div>
      <div className="body-credit-card-area">
        <CreditCard />
        <CreditCard />
        <CreditCard />
      </div>
    </div>
  );
};
