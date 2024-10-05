//import { ReactElement } from "react";
import "./index.css";
import { OptionMenu } from "../optionMenu/OptionMenu";

// type typeProps = {
//   children?: ReactElement | string | number;
// };

export const Header = () => {
  return (
    <div id="header-menu">
      <div id="area-options">
        <OptionMenu label="Dashboards" />
        <OptionMenu label="Cartões" />
        <OptionMenu label="Despesas" />
      </div>
    </div>
  );
};
