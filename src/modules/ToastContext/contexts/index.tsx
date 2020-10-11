import React, { createContext, FunctionComponent, useState } from "react";
import { Toast } from "../components/Toast";
import { TOAST_TYPES } from "../types";

type ToastContextValues = {
  type: TOAST_TYPES;
  message: string;
  displayToast: () => void;
  setType: React.Dispatch<React.SetStateAction<TOAST_TYPES>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};

export const ToastContext = createContext<ToastContextValues>({
  type: TOAST_TYPES.SUCCESS,
  message: "",
  displayToast: () => null,
  setType: () => null,
  setMessage: () => null,
});

export const ToastWrapper: FunctionComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [type, setType] = useState(TOAST_TYPES.SUCCESS);
  const [message, setMessage] = useState("");
  function displayToast() {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }
  return (
    <ToastContext.Provider
      value={{ type, message, displayToast, setType, setMessage }}
    >
      {isVisible && <Toast type={type} message={message} />}
      {children}
    </ToastContext.Provider>
  );
};
