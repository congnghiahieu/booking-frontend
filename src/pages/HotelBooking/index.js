import { useState } from "react";

const HotelBooking = () => {
  const [time, setTime] = useState(60);

  const data = [
    {
      id: 1,
      name: "a",
    },
    {
      id: 2,
      name: "b",
    },
  ];
  return (
    <div>
      <h1>{time}</h1>
      <button
        onClick={() => {
          setTime((prev) => prev + 1);
        }}
      >
        Tang
      </button>
      <ul>
        {data.map((d) => {
          console.log(d);

          return <li key={d.id} className={`li-${d.id}`}>{d.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default HotelBooking;
