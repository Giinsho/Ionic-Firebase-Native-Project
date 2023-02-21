import React from "react";
import TypeOfPass from "./TypeOfPass";
import Price from "./Price";
import Description from "./Description";
export default function PassItem({
  type,
  price,
  gwarancja1,
  gwarancja2,
  gwarancja3,
  gwarancja4,
  tydzien,
  tydzienGodziny,
  weekend,
  weekendGodziny,
  dodatki,
  dodatek1,
  dodatek2,
  dodatek3,
}) {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <TypeOfPass type={type}></TypeOfPass>
        <Price price={price}></Price>
        <Description
          gwarancja1={gwarancja1}
          gwarancja2={gwarancja2}
          gwarancja3={gwarancja3}
          gwarancja4={gwarancja4}
          tydzien={tydzien}
          tydzienGodziny={tydzienGodziny}
          weekend={weekend}
          weekendGodziny={weekendGodziny}
           dodatki = { dodatki}
          dodatek1={dodatek1}
          dodatek2={dodatek2}
          dodatek3={dodatek3}
        ></Description>
      </div>
    </>
  );
}
