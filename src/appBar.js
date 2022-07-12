import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function ButtonAppBar(props) {
  return (
    <Box sx={{
      flexGrow: 1, display: 'flex', pt: 1, maxHeight: "10vh"
    }}>
      <AppBar position="static" sx={{
        backgroundColor: "#C9C5CB",
        borderRadius: 3,
        boxShadow: 0,
      }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="info"
            sx={{ mr: 2, color: "black" }}
          >
            <InfoOutlinedIcon />
          </IconButton>

          <Tooltip title="Send your feedback here">
            <IconButton
              size="large"
              edge="start"
              aria-label="info"
              sx={{ mr: 2, color: "black" }}
            >
              <FeedbackOutlinedIcon />
            </IconButton>
          </Tooltip>

        </Toolbar>
      </AppBar>

    </Box >
  );
}
