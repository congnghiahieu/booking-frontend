import style from "./SuggestItem.module.css";

import React from "react";

const SuggestItem = ({ placename }) => {
  return (
    <div className={style.SuggestItem}>
      <img></img>
      <span className={style.province}>{placename}</span>
    </div>
  );
};

export default SuggestItem;
