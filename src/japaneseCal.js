import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';


function JapaneseCal(props) {
    var japYears = props.japYears;
    var eras = props.eras;

    return (
        <Box sx={{ flexGrow: 1, backgroundColor: '#ccc9a1' }}>
            <Typography variant="h1" component="div" align="center" gutterBottom>
                カレンダー
            </Typography>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="jap-select">Year</InputLabel>
                <Select native defaultValue="" id="jap-select" label="Year">
                    <option aria-label="None" value="" />
                    {
                        eras.map((era, index) => {
                            var yearsInEra = [];
                            japYears.map(y => {
                                if (y.startsWith(era)) {
                                    yearsInEra.push((<option key={y} value={y}>{y}</option>));
                                }
                            });
                            return (<optgroup label={era}>{yearsInEra}</optgroup>);
                        })
                    }
                </Select>
            </FormControl>
        </Box>
    );
}

export default JapaneseCal;