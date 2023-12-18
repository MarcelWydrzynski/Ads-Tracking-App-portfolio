import React, { useState } from "react";
import { FormControl, Button } from "@chakra-ui/react";
import Portals from "../../../data/Portals";
import Placements from "../../../data/Placements";
import SalesMen from "../../../data/Salesmen";
import AdState from "../../../data/AdState";
import SelectInput from "../Inputs/SelectInput";
import TextInput from "../Inputs/TextInput";
import DateInput from "../Inputs/DateInput";
import "./Form.scss";
import Btn from "../Btn";

const Form = ({ closeForm, adAdditionHandler }) => {
  const [adFormData, setAdFormData] = useState({
    adPortalNameInput: "Proszę wybrać portal",
    adPlacementInput: "Proszę wybrać placement reklamy",
    adTitle: "",
    adStartDate: "",
    adEndDate: "",
    adTaskNumber: "",
    adSalesMan: "Proszę wybrać handlowca",
    adState: "Proszę wybrać status reklamy",
  });
  const [error, setError] = useState(false);

  const formSubmissionHandler = () => {
    if (
      adFormData.adPortalNameInput === "Proszę wybrać portal" ||
      adFormData.adTitle === "" ||
      adFormData.adStartDate === "" ||
      adFormData.adEndDate === "" ||
      adFormData.adTaskNumber === "" ||
      adFormData.adState === "Proszę wybrać status reklamy" ||
      adFormData.adSalesMan === "Proszę wybrać handlowca"
    ) {
      setError(true);
    } else {
      adAdditionHandler(adFormData);
      closeForm();
    }
  };

  const handleInputChange = (field, value) => {
    setAdFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <FormControl
      w="50%"
      p="20px"
      display="flex"
      flexDirection="column"
      gap="15px"
      border="1px solid black"
      borderRadius="15px"
      textAlign="left"
      bgColor="grey"
      zIndex={99}
      onClick={(e) => e.stopPropagation()}
    >
      <SelectInput
        data={Portals}
        onChange={handleInputChange}
        functionString="adPortalNameInput"
      />
      <SelectInput
        data={Placements}
        onChange={handleInputChange}
        functionString="adPlacementInput"
      />
      <TextInput
        label="Nazwa Kampanii"
        onChange={handleInputChange}
        functionString="adTitle"
      />
      <DateInput
        label="Start Kampanii"
        onChange={handleInputChange}
        functionString="adStartDate"
      />
      <DateInput
        label="koniec Kampanii"
        onChange={handleInputChange}
        functionString="adEndDate"
      />
      <TextInput
        label="Numer zadania w panelu"
        onChange={handleInputChange}
        functionString="adTaskNumber"
      />
      <SelectInput
        data={SalesMen}
        onChange={handleInputChange}
        functionString="adSalesMan"
      />
      <SelectInput
        data={AdState}
        onChange={handleInputChange}
        functionString="adState"
      />
      <div className="form-btns-container">
        <Btn onClick={formSubmissionHandler}>Dodaj Baner</Btn>
        <Btn onClick={closeForm}>Anuluj</Btn>
      </div>
      {error ? (
        <p className="error-text">Proszę wypełnić wszystkie pola!</p>
      ) : null}
    </FormControl>
  );
};

export default Form;
