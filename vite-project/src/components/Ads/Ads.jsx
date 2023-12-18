import React from "react";
import Ad from "./Ad";
import { motion, AnimatePresence } from "framer-motion";
import "./Ads.scss";

const Ads = ({ props, onDelete, onDuplicate }) => {
  return (
    <div className="ads-container">
      <div className="ads-container__ads-table">
        {props.length > 0 ? (
          props.map((ad) => (
            <Ad
              key={crypto.randomUUID()}
              ad={ad}
              onDelete={onDelete}
              onDuplicate={onDuplicate}
            />
          ))
        ) : (
          <h3 className="ads-container__error-msg">
            Nie ma żadnych takich banerów :/
          </h3>
        )}
      </div>
    </div>
  );
};

export default Ads;
