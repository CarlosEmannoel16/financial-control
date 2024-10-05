import { ReactElement } from "react";
import "./index.css";

type typeProps = {
  children?: ReactElement | string | number;
  label: string;
};
export const OptionMenu = (props: typeProps) => {
  return <div className="option-header">{props.label}</div>;
};
