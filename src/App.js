import "./App.css";
import Grid from "@mui/material/Grid";
import { makeStyles } from '@mui/styles';
import React, { useState } from "react";
import WesternCal from "./westernCal";
import JapaneseCal from "./japaneseCal";

import GithubCorner from 'react-github-corner';

import Fab from '@mui/material/Fab';
import Box from "@mui/material/Box";
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material";
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import InfoModal from "./infoModal";

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));


function App() {
  var j2w = require("./data/j2w.json");
  var w2j = require("./data/w2j.json");
  var eras = require("./data/eras.json");

  var westernYears = Object.keys(w2j);
  var japYears = Object.keys(j2w);

  const [currWesternYear, setCurrWesternYear] = useState(westernYears[0]);
  const [currJapYear, setCurrJapYear] = useState(w2j[currWesternYear][0]);

  const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalOpen = () => setModalOpen(true);

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const classes = useStyles();

  return (
    <Box sx={{
      height: "100vh",
      px: 2,
      display: 'flex',
      alignItems: 'center'
    }}>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        <Grid item xs={12}>
          <GithubCorner
            size="70"
            ariaLabel="Contribute to this project"
            href="https://github.com/iedr/karenda"
          />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{
            display: 'flex',
            backgroundColor: "#C9C5CB",
            borderRadius: 3,
            flexDirection: 'column',
            alignItems: 'center',
            height: "40vh",
            justifyContent: 'center'
          }}>
            <WesternCal
              westernYears={westernYears}
              currWesternYear={currWesternYear}
              currJapYear={currJapYear}
              w2j={w2j}
              setCurrJapYear={setCurrJapYear}
              setCurrWesternYear={setCurrWesternYear}
              theme={theme}
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{
            display: 'flex',
            backgroundColor: "#C9C5CB",
            borderRadius: 3,
            flexDirection: 'column',
            alignItems: 'center',
            height: "40vh",
            justifyContent: 'center',
          }}>
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
          </Box>

        </Grid>

        <Box sx={{ p: 2 }}>
          <Fab size="large" aria-label="information" onClick={handleModalOpen} className={classes.fab}>
            <QuestionMarkOutlinedIcon />
          </Fab>
        </Box>

        <InfoModal modalOpen={modalOpen} setModalOpen={setModalOpen} />


      </Grid>
    </Box >
  );
}

export default App;
