import React from "react";

function Message({ children }) {
  return (
    <div role="alert" className="alert bg-blue-200">
      {children}
    </div>
  );
}

export default Message;
