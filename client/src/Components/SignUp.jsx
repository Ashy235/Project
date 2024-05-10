import React from "react";
import { createPortal } from "react-dom";

function SignUp() {
  const container = document.querySelector("#portal-signup");
  return createPortal(
    <div className="signup-container">
      <h1>Hello</h1>
    </div>,
    container
  );
}

export default SignUp;
