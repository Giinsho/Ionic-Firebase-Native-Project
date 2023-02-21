import PassItem from "./PassItem";
import { List, ListItem } from "@mui/material";
import styles from "./app.css";
import Price from "./Price";
import React from "react";
export default function UserPass() {
  return (
    <>
      <List
        style={{
          display: "flex",
          
          width: "100%",
          top: "30%",
          flexDirection: "row",
        }}
      >
        <ListItem className="pass">
          <PassItem
            type="Studencki"
            price="30.00 zł"
            gwarancja1="ponad 200 klubów"
            gwarancja2="ubezpieczenie NNW"
            gwarancja3="bez umowy"
            gwarancja4="koszt aktywacji 0 zł"
            tydzien="Poniedziałek - Piątek"
            tydzienGodziny="do godz. 16:00"
            weekend="Sobota - Niedziela"
            weekendGodziny="do godz. 18:00"
            dodatki="Dodatki"
            dodatek1="zumba"
            dodatek2="siłownia"
            dodatek3="fitness"
          />
        </ListItem>
        <ListItem className="pass1">
          <PassItem
            type="Normalny"
            price="50.00 zł"
            gwarancja1="ponad 200 klubów"
            gwarancja2="ubezpieczenie NNW"
            gwarancja3="bez umowy"
            gwarancja4="koszt aktywacji 0 zł"
            tydzien="Poniedziałek - Piątek"
            tydzienGodziny="do godz. 16:00"
            weekend="Sobota - Niedziela"
            weekendGodziny="bez limitów 🔥"
            dodatki="Dodatki"
            dodatek1="indoor cycling"
            dodatek2="siłownia"
            dodatek3="joga"
          />
        </ListItem>
        <ListItem className="pass2">
          <PassItem
            type="Premium"
            price="80.00 zł"
            gwarancja1="ponad 200 klubów"
            gwarancja2="ubezpieczenie NNW"
            gwarancja3="bez umowy"
            gwarancja4="koszt aktywacji 0 zł"
            tydzien="Poniedziałek - Piątek"
            tydzienGodziny="bez - limitów 🔥"
            weekend="Sobota - Niedziela"
            weekendGodziny="bez - limitów 🔥"
            dodatki="Dodatki"
            dodatek1="siłownia"
            dodatek2="sauna"
            dodatek3="opieka trenera"
          />
        </ListItem>
      </List>
    </>
  );
}
