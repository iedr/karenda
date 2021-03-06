import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { ThemeProvider } from '@mui/material/styles';

function WesternCal(props) {
  var westernYears = props.westernYears;

  return (
    <>
      <Box sx={{ py: 2, display: "flex" }}>
        <ThemeProvider theme={props.theme}>
          <Typography variant="h3">
            Calendar
          </Typography>
        </ThemeProvider>
      </Box>

      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="western-select">Year</InputLabel>
        <Select
          native
          value={props.currWesternYear}
          id="western-select"
          label="Year"
          onChange={(e) => {
            props.setCurrWesternYear(e.target.value);
            props.setCurrJapYear(props.w2j[e.target.value][0]);
          }}
        >
          {westernYears.map((item, index) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
}

export default WesternCal;
