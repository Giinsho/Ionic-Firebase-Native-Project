import OpenTime from "./OpenTime";
import CloseTime from "./CloseTime";
import React from 'react';
const DayItem = ({ name, Open, Close }) => {
  return (
    <li>
      <div>
        <h4>{name}</h4>
        <p>
          Otwarcie: <OpenTime hours={Open}></OpenTime>
        </p>
        <p>
          Zamknięcie: <CloseTime hours={Close}></CloseTime>
        </p>
      </div>
    </li>
  );
};
export default DayItem;
