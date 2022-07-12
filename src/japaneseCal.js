import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { ThemeProvider } from '@mui/material/styles';

function JapaneseCal(props) {
  var japYears = props.japYears;
  var eras = props.eras;

  return (
    <>
      <Box sx={{ py: 2 }}>
        <ThemeProvider theme={props.theme}>
          <Typography variant="h3">
            カレンダー
          </Typography>
        </ThemeProvider>
      </Box>

      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel htmlFor="jap-select">Year</InputLabel>
        <Select
          native
          value={props.currJapYear}
          id="jap-select"
          label="Year"
          onChange={(e) => {
            props.setCurrJapYear(e.target.value);
            props.setCurrWesternYear(props.j2w[e.target.value][0]);
          }}
        >
          {eras.map((era, index) => {
            var era_english = era.split(" (")[0];
            var yearsInEra = [];
            japYears.map((y) => {
              if (y.startsWith(era_english)) {
                yearsInEra.push(
                  <option key={y} value={y}>
                    {y}
                  </option>
                );
              }
            });
            return (
              <optgroup key={era} label={era}>
                {yearsInEra}
              </optgroup>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
}

export default JapaneseCal;
