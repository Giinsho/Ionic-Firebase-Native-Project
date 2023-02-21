import { Typography, List, ListItem, Divider } from "@mui/material";
import React from "react";

export default function Description({
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
  dodatek3
}) {
  return (
    <>
      <Typography>
        <List>
          <ListItem><span role={"img"} aria-label={"gwiazdka1"}>⭐</span>️ {gwarancja1}</ListItem>
          <ListItem><span role={"img"} aria-label={"gwiazdka1"}>⭐</span>️ {gwarancja2}</ListItem>
          <ListItem><span role={"img"} aria-label={"gwiazdka1"}>⭐</span>️ {gwarancja3}</ListItem>
          <ListItem><span role={"img"} aria-label={"gwiazdka1"}>⭐</span>️ {gwarancja4}</ListItem>
        </List>
        <Divider />
        <List>
          <Typography variant="h6" color={"yellow"}>
            {tydzien}
          </Typography>
          <ListItem><span role={"img"}>🕖</span> {tydzienGodziny}</ListItem>
          <Divider />
          <Typography variant="h6" color={"yellow"}>
            {weekend}
          </Typography>

          <ListItem><span role={"img"}>🕖</span> {weekendGodziny}</ListItem>
          <Divider />
          <Typography variant="h6" color={"yellow"}>
            <span role={"img"}>🏋️‍♀</span>️ {dodatki}
          </Typography>
          <ListItem><span role={"img"}>✔</span>️ {dodatek1}</ListItem>
          <Divider />
          <ListItem><span role={"img"}>✔</span>️ {dodatek2}</ListItem>
          <Divider />
          <ListItem><span role={"img"}>✔</span>️ {dodatek3}</ListItem>
        </List>
      </Typography>
    </>
  );
}
