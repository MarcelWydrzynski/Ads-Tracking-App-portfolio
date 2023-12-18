import React, { useState, useEffect } from "react";
import { Box, Button } from "@chakra-ui/react";
import Header from "./components/Header";
import "./App.css";
import Filters from "./components/Filters/Filters.jsx";
import Ads from "./components/Ads/Ads";
import Form from "./components/Forms/Form.jsx";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import firestore from "./utils/firebase.js";

function App() {
  const [adsList, setAdsList] = useState([]);
  const [filteredAds, setFilteredAds] = useState([]);
  const [formActive, setFormActive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const adsCollection = collection(firestore, "Ads");
        const snapshot = await getDocs(adsCollection);

        const adsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setAdsList(adsData);
        setFilteredAds(adsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const formActiveHandler = () => {
    setFormActive(!formActive);
  };

  const handleFilterChange = (filteredData) => {
    setFilteredAds(filteredData);
  };

  const adAdditionHandler = async (adFormData) => {
    const newAd = {
      portal: adFormData.adPortalNameInput,
      placement: adFormData.adPlacementInput,
      title: adFormData.adTitle,
      start_date: adFormData.adStartDate,
      end_date: adFormData.adEndDate,
      taskNumber: adFormData.adTaskNumber,
      salesman: adFormData.adSalesMan,
      state: adFormData.adState,
    };
  
    try {
      const adsCollection = collection(firestore, "Ads");
      const docRef = await addDoc(adsCollection, newAd);
  
      // Update local state with the newly added document
      setAdsList((prevAds) => [{ id: docRef.id, ...newAd }, ...prevAds]);
      setFilteredAds((prevAds) => [{ id: docRef.id, ...newAd }, ...prevAds]);
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  const adDuplicatedAdsHandler = async (originalAd) => {
    try {
      const adsCollection = collection(firestore, "Ads");
      const duplicatedAd = { ...originalAd };
  
      // Add the duplicated ad to Firestore
      const docRef = await addDoc(adsCollection, duplicatedAd);
  
      // Update the local state with the newly duplicated document
      setAdsList((prevAds) => [{ id: docRef.id, ...duplicatedAd }, ...prevAds]);
      setFilteredAds((prevAds) => [{ id: docRef.id, ...duplicatedAd }, ...prevAds]);
    } catch (error) {
      console.error("Error duplicating ad:", error);
    }
  };

  const deleteAdHandler = (id) => {
    try {
      const adRef = doc(firestore, "Ads", id);
      console.log(adRef)
      deleteDoc(adRef);
  
      // Update the local state after successful deletion
      setAdsList((prevAds) => prevAds.filter((ad) => ad.id !== id));
      setFilteredAds((prevAds) => prevAds.filter((ad) => ad.id !== id));
    } catch (error) {
      console.error("Error deleting ad:", error);
    }
  };

  return (
    <div className="App">
      {formActive ? (
        <div className="backdrop" onClick={formActiveHandler}>
          <Form
            closeForm={formActiveHandler}
            adAdditionHandler={adAdditionHandler}
          />
        </div>
      ) : null}
      <Header />
      <Filters adsData={adsList} onFilterChange={handleFilterChange} />
      <Ads
        props={filteredAds}
        onDelete={deleteAdHandler}
        onDuplicate={adDuplicatedAdsHandler}
      />
      <Button
        colorScheme="orange"
        pos="absolute" bottom="2%" 
        className="form-control-btn"
        onClick={formActiveHandler}
      >
        Dodaj Baner
      </Button>
      <Box>
        <ul></ul>
      </Box>
    </div>
  );
}

export default App;
