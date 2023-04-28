import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faStar,
  faPersonWalking,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import style from "./HotelSingle.module.css";
import {
  InputSearch,
  DatePlant,
  Member,
  NearBy,
  HotelSuggest,
  FeedBack,
  HotelIntro,
  HotelCmt,
  HotelService,
  SearchHeader,
} from "../../components";
import { Link, useParams } from "react-router-dom";

const HotelSingle = () => {
  const { hotelId } = useParams();

  return (
    <div className={style.HotelSingle}>
      <SearchHeader />
      <div className={style.HotelSingle_main}>
        <HotelIntro hotelId={hotelId} />
        <HotelService hotelId={hotelId} />
        <FeedBack hotelName="Căn hộ Nikko" hotelPoint="9,1" />
        <HotelCmt hotelId={hotelId} />
      </div>
    </div>
  );
};

export default HotelSingle;
