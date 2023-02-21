import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.js";
import ActivityUserItem from "./ActivityUserItem.js";
import styles from "./dashbord.css";
import { makeStyles } from "@mui/styles";
import { Grid, IconButton } from "@mui/material";
import { db } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { Repeat } from "@mui/icons-material";
import { useAuth } from "../Contexts/AuthContext";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import swal from "sweetalert";
/*outline: "1px solid slategrey",*/
const useStyles = makeStyles({
  "@global": {
    "*": {
      scrollbarWidth: "thin",
      scrollbarColor: "transparent)",
      "&::-webkit-scrollbar": {
        width: 14,
        height: 1,
        backgroundColor: "transparent",
      },
      "&::-webkit-scrollbar-track": {
        background:
          "linear-gradient(180deg, rgba(48,140,242,1) 30%, rgba(195,37,114,1) 100%)",
      },
      "&::-webkit-scrollbar-thumb": {
        borderRadius: 6,
        backgroundColor: "#01F7FF",
        minHeight: 24,
        minWidth: 24,
      },
      "&::-webkit-scrollbar-thumb:focus": {
        backgroundColor: "#01FFDC",
      },
      "&::-webkit-scrollbar-thumb:active": {
        backgroundColor: "#F59E3B",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#F59E3B",
      },
      "&::-webkit-scrollbar-corner": {
        backgroundColor: "transparent",
      },
    },
  },
});

export default function DashboardUser() {
  const { currentUser } = useAuth();
  const [activities, setActivities] = useState([]);
  const activitiesCollectionRef = collection(db, currentUser.email);
  const [error, setError] = useState();
  const classes = useStyles();
const navigate = useNavigate();
 
  const handleClickDelete = async (id) => {
    swal("Success", "Activity has been deleted!", "success");
    const activityDoc = doc(db,currentUser.email, id);
    await deleteDoc(activityDoc);
    window.setInterval(refresh, 700);
   
  };

  function refresh() {
    window.location.reload();
  }
  useEffect(() => {
    const getActivities = async () => {
      const data = await getDocs(activitiesCollectionRef);
      setActivities(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getActivities();

  }, []);

  return (
    <>
      <Grid
        container
        spacing={24}
        style={{
          width: "100%",
          top: "100%",
          height: "100%",
        }}
      >
     
        {activities.map((activity) => {
          return (
            <Grid
              item
              xs={0}
              style={{ marginLeft: "5vh", marginRight: "13vh" }}
            >
              <IconButton
                onClick={() => {
                  handleClickDelete(activity.id);
                }}
                aria-label="delete"
              >
                <DeleteForeverIcon
                  style={{
                    color: "#fc0061",
                    fontSize: "40px",
                  }}
                />
              </IconButton>
              <ActivityUserItem
                id={activity.id}
                trainer={activity.trainer}
                day={activity.day.toDate().toString()}
                time={activity.day.toDate().toLocaleTimeString("pl-PL")}
                duration={activity.duration}
                name={activity.name}
                description={activity.description}
                trainerPhoto={activity.trainerPhoto}
                activityPhoto={activity.activityPhoto}
                userMail={activity.email}
              ></ActivityUserItem>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
