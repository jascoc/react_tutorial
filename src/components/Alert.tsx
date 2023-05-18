import React, { ReactNode } from "react";
import 'bootstrap/dist/css/bootstrap.css'

interface Props {
  children: ReactNode;
  isShown: Boolean;
}

const Alert = ({ children, isShown }: Props) => {
  return AlertJSX(children, isShown);
};

const AlertJSX = (children: ReactNode, isShown: Boolean) => {
  return (
    <>
      {isShown ? <div
        className="alert alert-dark alert-dismissible fade show"
        role="alert"
      >
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>: <></>}
    </>
  );
};

export default Alert;
