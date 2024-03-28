import React from "react";

// const CustomAlert = (message: string) => {
//   return( <div className="custom-alert">{message}</div>);
// };
type CustomAlertProps = {
  message: string;
};
// export default CustomAlert;
const CustomAlert: React.FC<CustomAlertProps> = ({ message }) => {
  return <div>{message}</div>;
};


export default CustomAlert;
