import { Typography } from '@mui/material';
import React from 'react'

export default function Price({price}) {
  return (
    <>
      <div>
        <Typography variant="body">Cena: {price} </Typography>
      </div>
    </>
  );
}
