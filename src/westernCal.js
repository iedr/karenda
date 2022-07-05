import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

function WesternCal(props) {
  var westernYears = props.westernYears;

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#ccc9a1" }}>
      <Typography variant="h1" component="div" align="center" gutterBottom>
        Calendar
      </Typography>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
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
    </Box>
  );
}

export default WesternCal;
