import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

function JapaneseCal(props) {
  var japYears = props.japYears;
  var eras = props.eras;

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#ccc9a1" }}>
      <Typography variant="h1" component="div" align="center" gutterBottom>
        カレンダー
      </Typography>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="jap-select">Year</InputLabel>
        <Select
          native
          value={props.currJapYear}
          id="jap-select"
          label="Japanese Year"
          onChange={(e) => {
            props.setCurrJapYear(e.target.value);
            props.setCurrWesternYear(props.j2w[e.target.value][0]);
          }}
        >
          <option aria-label="None" value="" />
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
    </Box>
  );
}

export default JapaneseCal;
