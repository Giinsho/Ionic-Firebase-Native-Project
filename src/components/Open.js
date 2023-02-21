import DayItem from "./DayItem";
import { List, ListItem } from "@mui/material";
import styles from "./app.css";
import React from 'react';
export default function Open () {
  return (
    <List
      style={{
        display: "flex",
        flexDirection: "row",
        // boxShadow: "-5px -5px 30px 3px violet, 5px 5px 30px 3px blue",
        // borderRadius: "40px 40px 40px 40px",
        width: "100vw",
      }}
    >
      <ListItem class="dni">
        <DayItem name="Poniedziałek" Open="8:00" Close="20:00" />
      </ListItem>
      <ListItem class="dni">
        <DayItem name="Wtorek" Open="8:00" Close="22:00" />
      </ListItem>
      <ListItem class="dni">
        <DayItem name="Środa" Open="8:00" Close="22:00" />
      </ListItem>
      <ListItem class="dni">
        <DayItem name="Czwartek" Open="8:00" Close="22:00" />
      </ListItem>
      <ListItem class="dni">
        <DayItem name="Piątek" Open="8:00" Close="22:00" />
      </ListItem>
      <ListItem class="dni">
        <DayItem name="Sobota" Open="10:00" Close="16:00" />
      </ListItem>
      <ListItem class="dni">
        <DayItem name="Niedziela" Open="Nieczynne" Close="-" />
      </ListItem>
    </List>
  );
};

