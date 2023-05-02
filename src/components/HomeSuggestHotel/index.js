const HomeSuggestHotel = ({ hotel }) => {
  return (
    <div>
      <p>{hotel.name}</p>
      <p>{`${hotel.location.city} ${hotel.location.nation}`}</p>
    </div>
  );
};

export default HomeSuggestHotel;
