import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#8EF9F3',
  borderRadius: 3,
  p: 3,
};

export default function InfoModal(props) {
  const handleModalClose = () => props.setModalOpen(false);

  return (
    <Modal
      closeAfterTransition
      open={props.modalOpen}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.modalOpen}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5">
            Karenda
          </Typography>

          <Typography sx={{ mt: 2 }}>
            Convert between the Western and the <a href="https://en.wikipedia.org/wiki/Japanese_era_name" target="_blank" rel="noreferrer">Japanese calendars</a> easily.
          </Typography>

          <Typography sx={{ mt: 2 }}>
            カレンダー means <a href="https://nihongomaster.com/japanese/dictionary/word/3605/karenda-karenda" target="_blank" rel="noreferrer">"calendar"</a> in Japanese.
          </Typography>

          <Typography sx={{ mt: 2 }}>
            The icon for this app is from <a href=" https://www.flaticon.com/free-icons/calendar" title="calendar icons" target="_blank" rel="noreferrer">here</a>.
          </Typography>
        </Box>
      </Fade>
    </Modal >
  );
}