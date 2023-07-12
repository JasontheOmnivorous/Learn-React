import React from "react";

interface Props {
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  onClick: () => void;
}

const Button = ({ color, onClick }: Props) => {
  return (
    <div className={`btn btn-${color}`} onClick={onClick}>
      Button
    </div>
  );
};

export default Button;
