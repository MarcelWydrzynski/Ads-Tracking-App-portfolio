import { Button, FormControl, FormLabel } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup, Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Portals from "../../../data/Portals";
import { useState } from "react";

const FormAdDuplication = ({ onClose, ad, onDuplicate, formHandler }) => {
  const [selectedPortals, setSelectedPortals] = useState([]);

  const onClick = (e) => {
    if (selectedPortals.includes(e.target.value)) {
      const updatedSelectedPortals = selectedPortals.filter(
        (portal) => portal !== e.target.value
      );
      setSelectedPortals(updatedSelectedPortals);
    } else {
      setSelectedPortals([...selectedPortals, e.target.value]);
    }
  };

  useEffect(() => {
    console.log(selectedPortals);
  }, [selectedPortals]);

  const createDuplicatedAds = () => {
    selectedPortals.forEach((portal) => {
      const newAd = {
        Id: crypto.randomUUID(),
        portal: portal,
        placement: ad.placement,
        title: ad.title,
        start_date: ad.start_date,
        end_date: ad.end_date,
        taskNumber: ad.taskNumber,
        salesman: ad.salesman,
        state: ad.state,
      };
      onDuplicate(newAd);
      formHandler();
    });
  };

  const updatedPortals = Portals.slice(1);

  return (
    <div className="backdrop">
      <FormControl
        w="50%"
        p="20px"
        display="flex"
        flexDirection="column"
        gap="20px"
        border="1px solid black"
        borderRadius="15px"
        bg="grey"
        zIndex={99}
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        width="20vw"
      >
        <CheckboxGroup colorScheme="green">
          <FormLabel textAlign="center">Proszę Wybrać portale</FormLabel>
          <Box
            display="flex"
            justifyContent="space-between"
            flexDirection="column"
            gap={3}
            alignItems="center"
          >
            {updatedPortals.map((portal) => (
              <Checkbox key={portal} value={portal} onChange={onClick}>
                {portal}
              </Checkbox>
            ))}
          </Box>
          <Box width="100%" display="flex" justifyContent="space-around">
            <Button onClick={createDuplicatedAds}>Duplikuj</Button>
            <Button onClick={onClose}>Anuluj</Button>
          </Box>
        </CheckboxGroup>
      </FormControl>
    </div>
  );
};

export default FormAdDuplication;
