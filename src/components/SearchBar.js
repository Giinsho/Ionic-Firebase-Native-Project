import React, { useState, useEffect } from "react";
import { Input, Button, Typography } from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

export default function SearchBar() {
  const { search } = window.location;
  return (
    <>
      <Typography variant="subtitle1" style={{color:"white", justifyContent:"center" }}>
        <form action="/" method="get">
          <label htmlFor="header-search">
            <span className="visually-hidden"> Search for activities </span>
          </label>
          <Input 
            style={{color:"whitesmoke", fontSize:"1.5em", background:
            "linear-gradient(0deg, rgba(175, 0, 177, 0.43)20%, rgba(91, 231, 249, 0.5) 100%)",position:"fixed",top:"0.3em",left:"6em",maxWidth:"8em"}}
            type="text"
            id="header-search"
            placeholder="Search..."
            name="search"
        
          />
          <Button startIcon={<SendIcon />} style={{ fontSize:"1.5em",position:"fixed",top:"1.6em",left:"5.5em"}} variant="success" type="submit">
            Search
          </Button>
        </form>
      </Typography>
    </>
  );
}
