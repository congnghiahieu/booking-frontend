import "./NearBy.css";
import { json } from "react-router-dom";

function NearBy({
  TileNear,
  place1,
  distance1,
  place2,
  distance2,
  place3,
  distance3,
  place4,
  distance4,
  place5,
  distance5,
  place6,
  distance6
}) {
  console.log(TileNear);

  return (
    <div className="walk_nearby">
      <div className="TileNear">{TileNear}</div>
      <div className="place_dis">
        <span>{place1}</span>
        <div></div>
        <span>{distance1}</span>
      </div>
      <div className="place_dis">
        <span>{place2}</span>
        <div></div>
        <span>{distance2}</span>
      </div>
      <div className="place_dis">
        <span>{place3}</span>
        <div></div>
        <span>{distance3}</span>
      </div>
      <div className="place_dis">
        <span>{place4}</span>
        <div></div>
        <span>{distance4}</span>
      </div>
      <div className="place_dis">
        <span>{place5}</span>
        <div></div>
        <span>{distance5}</span>
      </div>
      <div className="place_dis">
        <span>{place6}</span>
        <div></div>
        <span>{distance6}</span>
      </div>
    </div>
  );
}

export default NearBy;
