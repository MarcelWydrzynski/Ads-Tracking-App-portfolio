import React from "react";
import { Input } from "@chakra-ui/react";


const DateInput = ({ label, onChange, functionString }) => {
  
  return (
    <div className="form-input-box">
      <label htmlFor="">{label}</label>
      <Input
        type="date"
        border="1px"
        _hover={{
          border: "1px solid black",
        }}
        onChange={(e) => onChange(functionString, e.target.value)
      }
      />
    </div>
  );
};

export default DateInput;
