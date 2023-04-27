import "./HotelItem.css";




function HotelItem({hotel}) {
  return (
    <div className="hotelItem">
      <figure className="hotel_sample">
        <img className="hotel_img" src={hotel.url}></img>
        <figcaption className="hotel_point">{hotel.point}</figcaption>
      </figure>
      {/* <div className="hotel_name">{hotel.name}</div> */}
    </div>
  );
}

export default HotelItem;
