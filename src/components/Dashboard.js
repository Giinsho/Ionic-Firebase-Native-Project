import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.js";
import ActivityItem from "./ActivityItem.js";
import styles from "./dashbord.css";
import { makeStyles } from "@mui/styles";
import { List, ListItem, Grid, Stack } from "@mui/material";
import { db } from "../firebase.js";
import { collection,query as Quer,  getDocs, doc, getDoc,  orderBy, onSnapshot } from "firebase/firestore";
import { QueryBuilder, Repeat } from "@mui/icons-material";
import { useAuth } from "../Contexts/AuthContext";
import moment from "moment";
import { useNavigate } from "react-router-dom";
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

export default function Dashboard() {
  const [activities, setActivities] = useState([]);
  const activitiesCollectionRef = collection(db, "activities");
  const q = Quer(activitiesCollectionRef, orderBy('day', 'desc'));
  const [error, setError] = useState();
  const classes = useStyles();
  const { currentUser } = useAuth();
  const { search } = window.location;
  const query = new URLSearchParams(search).get("search");
  useEffect(() => {
   
    const getActivities = async () => {
      const data = await getDocs(q);
      setActivities(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const sortByDate = async () => {
    const sorted = activities.sort((a, b) => {
      // console.log(new Date(b.day).getTime - new Date(a.day ).getTime )
      console.log(a.day - b.day)
      return (a.day - b.day);
    });
    console.log({activities});
    console.log({sorted});
    setActivities(sorted);
  };
    getActivities();
    sortByDate();
    // const q =   query(collection(db, 'activities'), orderBy('day', 'desc'))
    // onSnapshot(q, (querySnapshot) => {
    //   setActivities(querySnapshot.docs.map(doc => ({
    //     id: doc.id,
    //     data: doc.data()
    //   })))
    // })
  }, []);

  
//.where("day",">",moment().format("YYYY-MM-DD").orderBy("day"))
  return (
    <>
      <Grid
        container
        spacing={24}
        style={{
          width: "100%",
          top: "100%",
          height: "80%",
          marginTop:"20%",

          
        }}
      >

        {activities.map((activity) => {
          
          return (
            <Grid
              item
              xs={1}
              style={{ marginLeft: "10%", marginRight: "20%",  }}
            >
              {query === "" || query == null || query.trim().length === 0 ? (
                <ActivityItem
                  trainer={activity.trainer}
                  day={activity.day.toDate().toString()}
                  time={activity.day.toDate().toLocaleTimeString("pl-PL")}
                  duration={activity.duration}
                  name={activity.name}
                  description={activity.description}
                  trainerPhoto={activity.trainerPhotoURL}
                  activityPhoto={activity.activityPhotoURL}
                  userMail={currentUser.email}
                ></ActivityItem>
              ) : (
                <>
                  {activity.name.includes(query) ||
                  activity.trainer.includes(query) ||
                  activity.description.includes(query) ||
                  activity.day.toDate().toString().includes(query) ||
                  activity.day
                    .toDate()
                    .toLocaleTimeString("pl-PL")
                    .toString()
                    .includes(query) ? (
                    <ActivityItem
                      trainer={activity.trainer}
                      day={activity.day.toDate().toString()}
                      time={activity.day.toDate().toLocaleTimeString("pl-PL")}
                      duration={activity.duration}
                      name={activity.name}
                      description={activity.description}
                      trainerPhoto={activity.trainerPhotoURL}
                      activityPhoto={activity.activityPhotoURL}
                      userMail={currentUser.email}
                    ></ActivityItem>
                  ) : 

                        <></>
                    }

                </>
              )}
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
