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
import axios from 'axios';

function CalendarCreateModal(props) {
  const { openModal, onCloseModal, value, setValue, store_id, user_id } = props;

  async function addReservation(appointmentData) {
    console.log('Sending reservation data.....');
    axios.put(`/api/reservations`, { appointmentData })
    .then(res => {
      if (res.status === 204) {
        alert(res.data);
      } else {
        const error = new Error(res.error);
        throw error;
      }
     })
     .catch(err => {
      console.error(err);
      alert('Error. Please try again');
    });
  }

  const handleClose = () => {
    onCloseModal(value);
    console.log("inside handle close:", value);
  }

  const handleSubmitClose = async selValue => {
    onCloseModal(selValue);
    let returnValue = selValue;
    console.log(returnValue);
    if (typeof returnValue === "string"){
      const parsedDate = parseISOString(selValue)
      returnValue = parsedDate;
      console.log("return value type is now", typeof returnValue);
     }
    
    const fullDate = `${returnValue.getFullYear()}-${returnValue.getMonth() + 1}-${returnValue.getDate()}`;

    const reservationReturnObj = {
      reservation_date: fullDate,
      start_hour: returnValue.getHours(),
      start_minutes: returnValue.getMinutes(),
      end_hour: returnValue.getMinutes() < 45 ? returnValue.getHours() : returnValue.getHours() +1,

      end_minutes: (returnValue.getMinutes() + 15) > 60 ? (returnValue.getMinutes() - 45) : (returnValue.getMinutes() +15)
    }

    console.log("inside handle submit close:", reservationReturnObj);

    let reservation_date = reservationReturnObj.reservation_date;
    let start_hour = reservationReturnObj.start_hour;
    let start_minutes = reservationReturnObj.start_minutes;
    let end_minutes = reservationReturnObj.end_minutes;
    let end_hour = reservationReturnObj.end_hour;
    //Send data to server?
    await addReservation({
      reservation_date, start_hour, start_minutes, end_hour, end_minutes, user_id, store_id
    });

  }

  function parseISOString(s) {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
  }


  return (
    <Dialog open={openModal} onClose={handleClose}>
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
                // console.log("inside datetimepicker:", newValue)
              }}
              minDate={new Date()}
              minTime={new Date(0, 0, 0, 7)}
              maxTime={new Date(0, 0, 0, 20)}
            />
          </Stack>
        </LocalizationProvider>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={() => handleSubmitClose(value)}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}

export {
  CalendarCreateModal
}