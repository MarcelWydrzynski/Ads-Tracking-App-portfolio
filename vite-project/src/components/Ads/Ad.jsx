import React from "react";
import { useState } from "react";
import Btn from "../Btn";
import FormAdDuplication from "../Forms/FormAdDuplication";

import "./Ad.scss";

const Ad = ({ ad, onDelete, onDuplicate }) => {
  const [formOpen, setFormOpen] = useState(false);
 
  const formHandler = () => {
    setFormOpen(!formOpen);
  };

  return (
    <>
      {formOpen ? <FormAdDuplication onClose={formHandler} ad={ad} onDuplicate={onDuplicate} formHandler={formHandler}/> : null}
      <div
        className="ad"
      >
        <p className="ad__detail">
          <span>Portal: </span>
          {ad.portal}
        </p>
        <p className="ad__detail">
          <span>Placement: </span>
          {ad.placement}
        </p>
        <p className="ad__detail">
          <span>Nazwa kampanii: </span>
          {ad.title}
        </p>
        <p className="ad__detail">
          <span>Start Emisji: </span>
          {ad.start_date}
        </p>
        <p className="ad__detail">
          <span>Koniec Emisji: </span>
          {ad.end_date}
        </p>
        <p className="ad__detail">
          <span>Handlowiec: </span>
          {ad.salesman}
        </p>
        <div className="ad__btns-container">
          <Btn onClick={onDelete} id={ad.id}>
            Usuń
          </Btn>
          <Btn onClick={() => {alert('after clicking this it would take you to the task in our task panel')}}>Zadanie</Btn>
          <Btn onClick={formHandler}>Duplikuj</Btn>
        </div>
      </div>
      
    </>
  );
};

export default Ad;
