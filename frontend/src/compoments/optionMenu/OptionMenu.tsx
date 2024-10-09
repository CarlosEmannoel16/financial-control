import { ReactElement, ReactNode } from "react";
import "./index.css";

type typeProps = {
  children?: ReactElement | string | number;
  label?: string;
  icon?: ReactNode;
  action: () => void;
};
export const OptionMenu = (props: typeProps) => {
  return (
    <div
      onClick={() => {
        props.action();
      }}
      className="option-header"
    >
      {props.icon}
      {props.label}
    </div>
  );
};
