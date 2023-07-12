import React, { ReactNode } from "react";

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
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ color, children, onClose }: Props) => {
  return (
    <div className={`alert alert-${color} alert-dismissible`}>
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
