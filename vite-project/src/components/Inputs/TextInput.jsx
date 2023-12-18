import React from "react";
import { Input } from "@chakra-ui/react";

const FormInput = ({ label, onChange, functionString}) => {

  return (
    <div className="form-input-box">
      <Input
        placeholder={label}
        type="text"
        border="1px"
        _hover={{ border: "1px solid black" }}
        onChange={(e) => onChange(functionString, e.target.value)}
      />
    </div>
  );
};

export default FormInput;