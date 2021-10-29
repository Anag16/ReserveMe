import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Stack from '@mui/material/Stack';

function CalendarCreateModal(props) {
  const { openModal, onCloseModal, value, setValue } = props;

  return (
    <Dialog open={openModal} onClose={onCloseModal}>
      <DialogTitle>Create reservation</DialogTitle>
      <DialogContent>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <DialogContentText>
              To see if this will render, entering test dialog
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
            />

            <DateTimePicker
              renderInput={(params) => <TextField {...params} />}
              label="Select your start date"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              minDate={new Date(value)}
              minTime={new Date(0, 0, 0, 10)}
              maxTime={new Date(0, 0, 0, 19, 45)}
            />
          </Stack>
        </LocalizationProvider>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseModal}>Cancel</Button>
        <Button onClick={onCloseModal}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}

function submitNewReservation() {
  
}

export {
  CalendarCreateModal
}