import React from 'react';

const HomeSuggestPlace = ({ place, setCurPlace }) => {
  return (
    <li>
      <button onClick={() => setCurPlace(place)}>{place} </button>
    </li>
  );
};

export default HomeSuggestPlace;
