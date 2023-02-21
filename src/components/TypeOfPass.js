import React from 'react'
import { Typography } from "@mui/material";
export default function TypeOfPassItem({type}) {
    return (
        <Typography variant="h4" >
            {type}
        </Typography>
    )
}
