import "./index.css";
import { OptionMenu } from "../optionMenu/OptionMenu";
import { FaChartColumn, FaMoneyBills } from "react-icons/fa6";
import { useMenuExpenseContext } from "../../contexts/MenuAddExpenseContext";

export const NavBar = () => {
  const { setShowMenu } = useMenuExpenseContext();
  return (
    <div id="menu">
      <div id="areaLogo">
        <img
          id="logoSite"
          src="https://cdn.pixabay.com/photo/2016/11/24/20/44/coins-1857222_1280.png"
          alt="Logo Nubank"
        />
        Finance Control
      </div>
      <div id="area-options">
        <div id="AreaMenu">
          <OptionMenu icon={<FaChartColumn size={40} />} action={() => {}} />
          <OptionMenu
            icon={<FaMoneyBills size={40} />}
            action={() => setShowMenu(true)}
          />
        </div>
      </div>
    </div>
  );
};
