import { ReactElement } from "react";
import "./index.css";

type typeProps = {
  children: ReactElement | string | number;
};

export const Row = (props: typeProps) => {
  return <div className="row">{props.children}</div>;
};
