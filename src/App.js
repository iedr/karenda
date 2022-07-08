import "./App.css";
import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";
import WesternCal from "./westernCal";
import JapaneseCal from "./japaneseCal";
import Box from "@mui/material/Box";

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material";
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

function App() {
  var j2w = require("./data/j2w.json");
  var w2j = require("./data/w2j.json");
  var eras = require("./data/eras.json");

  var westernYears = Object.keys(w2j);
  var japYears = Object.keys(j2w);

  const [currWesternYear, setCurrWesternYear] = useState(westernYears[0]);
  const [currJapYear, setCurrJapYear] = useState(w2j[currWesternYear][0]);

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <Box sx={{ height: "100vh", px: 2, alignItems: 'center', display: 'flex' }}>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          {/* <Box sx={{
          display: 'flex',
          backgroundColor: "#C9C5CB",
          borderRadius: 2,
          p: 2,
          flexDirection: 'column',
          alignItems: 'center'
        }}> */}
          <WesternCal
            westernYears={westernYears}
            currWesternYear={currWesternYear}
            currJapYear={currJapYear}
            w2j={w2j}
            setCurrJapYear={setCurrJapYear}
            setCurrWesternYear={setCurrWesternYear}
            theme={theme}
          />
          {/* </Box> */}
        </Grid>

        <Grid item xs={6}>
          {/* <Box sx={{
          display: 'flex',
          backgroundColor: "#C9C5CB",
          borderRadius: 2,
          p: 2,
          flexDirection: 'column',
          alignItems: 'center'
        }}> */}
          <JapaneseCal
            eras={eras}
            japYears={japYears}
            currWesternYear={currWesternYear}
            currJapYear={currJapYear}
            setCurrJapYear={setCurrJapYear}
            setCurrWesternYear={setCurrWesternYear}
            j2w={j2w}
            theme={theme}
          />
          {/* </Box> */}
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
