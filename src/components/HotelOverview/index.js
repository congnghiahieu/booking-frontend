import style from "./HotelOverview.module.css";

function HotelOverview({ hotel }) {
  console.log(hotel);
  return (
    <div id={style.Overview}>
      <div className={style.hotel_name}>
        <div className={style.name_header}>
          <div className={style.logo_wrapper}>
            <img
              className={style.Accommodation_type_badge__homes_logo}
              alt=""
              src="//cdn6.agoda.net/images/agoda-homes/homes-logo.svg"
            ></img>
          </div>
          <div className={style.header_script}>Toàn bộ căn hộ</div>
        </div>
        <div className={style.hotel_text}>
          <div className={style.hotel_header}>
            <p>{hotel.name}</p>
            <span className={style.hotel_star}></span>
          </div>
          <p className={style.hotel_location}>
            {`${hotel?.location?.other ? `${hotel.location.other} ,`: ''}${hotel.location.city}, ${hotel.location.nation} `}
          </p>
          <p className={style.hotel_decription}>
            {hotel.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HotelOverview;
