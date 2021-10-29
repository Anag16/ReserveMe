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

  function submitNewReservation() {
    // Fri Dec 03 2021 13:15:11 GMT-0500 (Eastern Standard Time) --> format returned by DatePicker selector --> object ? 
    const fullDate = `${value.getFullYear()}-${value.getMonth()}-${value.getDate()}`;
    
    const reservationReturnObj = {
      reservation_date: fullDate,
      start_hour: value.getHours(),
      start_minutes: value.getMinutes(),
      end_hour: value.getHours(),
      end_minutes: value.getMinutes() + 15
    }

    console.log(reservationReturnObj)

    onCloseModal();
  }

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
              minDate={new Date()}
              minTime={new Date(0, 0, 0, 7)}
              maxTime={new Date(0, 0, 0, 20)}
            />
          </Stack>
        </LocalizationProvider>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseModal}>Cancel</Button>
        <Button onClick={submitNewReservation}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}

export {
  CalendarCreateModal
}