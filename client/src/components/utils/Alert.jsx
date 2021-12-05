import React, { useEffect } from "react";
import "../../styles/Alert.scss";

const Alert = ({ msg, type, handleAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleAlert();
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="alert">
      <p className={`correct ${type}`}>{msg}</p>
    </div>
  );
};

export default Alert;
