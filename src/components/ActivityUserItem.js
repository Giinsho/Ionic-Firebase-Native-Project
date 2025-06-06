import React from "react";
import styles from "./app.css";

import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import {
  Box,
  Card,
  Avatar,
  CardMedia,
  CardContent,
  CardActions,
  CardHeader,
  Divider,
  Typography,
  Collapse,
  Stack,
  TextField,
} from "@mui/material";

import { LocalizationProvider, DateTimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useAuth } from "../Contexts/AuthContext";


const useStyles = makeStyles({
  media: {
    paddingTop: "56.25%", // 16:9,
    marginTop: "30",

    "&:hover": {
      minHeight: "16vh",
      minWidth: "16vh",
    },
  },
  card: {
    minWidth: "35vh",
    minHeight: "35vh",

    borderRadius: "5%",
    border: "2px solid blue",
    boxShadow: "0px 0px 30px 5px violet",
    "&:hover": {
      boxShadow: "-5px -5px 30px 5px violet, 5px 5px 30px 5px blue",
    },
  },

  cardContent: {
    padding: "10px",
  },

  cardTypograhpy: {
    fontFamily: "serif",
    fontSize: 14,
    lineHeightStep: "10px",
    color: "white",
  },

  cardAction: {},

  cardContentColapse: {},

  hr1: {
    color: "red",
  },
});

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ActivityUserItem({
  id,
  day,
  time,
  description,
  duration,
  name,
  trainer,
  trainerPhoto,
  activityPhoto,
  userMail,
}) {
  const [expanded, setExpanded] = React.useState(false);
  const { currentUser } = useAuth();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const classes = useStyles();




  return (
    <Card className={classes.card}>
      {{ trainerPhoto } != null ? (
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: "red" }}
              aria-label="recipe"
              src={trainerPhoto}
            ></Avatar>
          }
          title={trainer}
        />
      ) : (
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: "red" }} aria-label="recipe"></Avatar>}
          title={trainer}
        />
      )}
      {{ activityPhoto } != null && activityPhoto != "" ? (
        <CardMedia className={classes.media} image={activityPhoto} />
      ) : (
        <CardMedia
          className={classes.media}
          image="https://st2.depositphotos.com/2605239/8820/v/950/depositphotos_88208908-stock-illustration-vector-grunge-illustration-of-dumbbells.jpg"
        />
      )}

      <CardContent className={classes.cardContent} sx={{ m: 2 }} divider>
        <Typography variant="h6"> Date of traning:</Typography>
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          style={{
            background: "rgba(30,240,250,0.286729691876751)",
          }}
        >
          <DateTimePicker
            renderInput={(params) => <TextField {...params} />}
            value={new Date(String(JSON.stringify({ day }.day)))}
          />
          {console.log(Date(Date.now()).toString())}
          {console.log(JSON.stringify({ day }.day))}{" "}
        </LocalizationProvider>

        <Typography variant="h6"> Duration:</Typography>
        <Typography variant="inherit">{duration}</Typography>
      </CardContent>
      <Divider style={{ background: "red" }}></Divider>
      <CardActions disableSpacing className="cardAction">
        <Typography
          variant="h6"
          color="black"
          fontWeight={600}
          style={{ padding: "5px" }}
        >
          {name}
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent
          style={{
            background:
              "linear-gradient(0deg, rgba(48,127,242,1) 20%, rgba(195,37,114,0.5886729691876751) 100%)",
          }}
        >
          <Typography paragraph variant="h6" color="white">
            Descryption:
          </Typography>

          <Typography className={classes.cardTypograhpy} variant="alignCenter">
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
