import React, { useState, useEffect } from "react";
import SelectInput from "../Inputs/SelectInput";
import TextInput from "../Inputs/TextInput";
import Portals from "../../../data/Portals";
import Placements from "../../../data/Placements";
import Salesmen from "../../../data/Salesmen";
import AdState from "../../../data/AdState";
import "./Filters.scss";

const Filters = ({ adsData, onFilterChange }) => {
  const [adFilter, setFilterAd] = useState({
    portal: "Proszę wybrać portal",
    placement: "Proszę wybrać placement reklamy",
    title: "",
    SalesMan: "Proszę wybrać handlowca",
    State: "Proszę wybrać status reklamy",
  });

  useEffect(() => {
    // Apply filters when any input changes
    applyFilter(adFilter);
  }, [adFilter]);

  const applyFilter = (filter) => {
    const filteredAds = adsData.filter((ad) => {
      return (
        (filter.portal === "Proszę wybrać portal" ||
          ad.portal === filter.portal) &&
        (filter.placement === "Proszę wybrać placement reklamy" ||
          ad.placement === filter.placement) &&
        (filter.SalesMan === "Proszę wybrać handlowca" ||
          ad.salesman === filter.SalesMan) &&
        (filter.State === "Proszę wybrać status reklamy" ||
          ad.state === filter.State) &&
        (filter.title === "" || ad.title.toLowerCase().includes(filter.title.toLowerCase()))
      );
    });

    onFilterChange(filteredAds);
  };

  const handleInputChange = (field, value) => {
    setFilterAd((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div className="filters-container">
      <SelectInput
        data={Portals}
        onChange={handleInputChange}
        functionString="portal"
      />
      <SelectInput
        data={Placements}
        onChange={handleInputChange}
        functionString="placement"
      />
      <SelectInput
        data={Salesmen}
        onChange={handleInputChange}
        functionString="SalesMan"
      />
      <SelectInput
        data={AdState}
        onChange={handleInputChange}
        functionString="State"
      />
      <TextInput
        label="Wyszukaj po nazwie"
        onChange={handleInputChange}
        functionString="title"
      />
    </div>
  );
};

export default Filters;
