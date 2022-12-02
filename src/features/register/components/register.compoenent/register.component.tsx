import React from "react";
import InputField from "../../../../shared/components/inputField/inputField.component";

const RegisterComponent = () => {
  return (
    <form>
      <InputField
        type="text"
        name="test"
        label="this is test"
        style={{
          backgroundColor: "white",
          width: "600px",
          display: "block",
        }}
      />
      <InputField
        type="text"
        name="test"
        label="this is test"
        style={{
          backgroundColor: "white",
          width: "600px",
          display: "block",
        }}
      />
    </form>
  );
};

export default RegisterComponent;
