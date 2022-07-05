import "./App.css";
import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";
import WesternCal from "./westernCal";
import JapaneseCal from "./japaneseCal";
import Box from "@mui/material/Box";

function App() {
  var j2w = require("./data/j2w.json");
  var w2j = require("./data/w2j.json");
  var eras = require("./data/eras.json");

  var westernYears = Object.keys(w2j);
  var japYears = Object.keys(j2w);

  const [currWesternYear, setCurrWesternYear] = useState(westernYears[0]);
  const [currJapYear, setCurrJapYear] = useState(w2j[currWesternYear][0]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <WesternCal
          westernYears={westernYears}
          currWesternYear={currWesternYear}
          currJapYear={currJapYear}
          w2j={w2j}
          setCurrJapYear={setCurrJapYear}
          setCurrWesternYear={setCurrWesternYear}
        />
      </Grid>

      <Grid item xs={6}>
        <JapaneseCal
          eras={eras}
          japYears={japYears}
          currWesternYear={currWesternYear}
          currJapYear={currJapYear}
          setCurrJapYear={setCurrJapYear}
          setCurrWesternYear={setCurrWesternYear}
          j2w={j2w}
        />
      </Grid>
    </Grid>
  );
}

export default App;
