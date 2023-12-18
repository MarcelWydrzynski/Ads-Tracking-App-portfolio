import React from "react";
import { Select } from "@chakra-ui/react";

const FormSelect = ({ data, onChange, functionString }) => {
  return (
    <div className="form-input-box">
      <Select
        border="1px"
        _hover={{ border: "1px solid black" }}
        onChange={(e) => onChange(functionString, e.target.value)}
      >
        {data.map((placement) => (
          <option value={placement} key={placement}>{placement}</option>
        ))}
      </Select>
    </div>
  );
};

export default FormSelect;
