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
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function CalendarCreateModal(props) {
  const { openModal, onCloseModal, value, setValue, store_id, user_id, remainingCapacity, store_name, getReservations } = props;
  const myAlert = withReactContent(Swal);

  //Send data to server. api/reservations needs reservation_date, start_hour, start_minutes, end_hour, end_minutes, user_id, store_id
  async function addReservation(appointmentData) {
    axios.put(`/api/reservations`, { appointmentData })
    .then(res => {
      if (res.status === 200) { //Status 204 does not allow to send a body response
        Swal.fire(
          'Done',
          res.data,
          'success'
        )
        getReservations(); //Make the calendar rerender by fetching the reservations again
      } else {
        const error = new Error(res.error);
        console.log(res);
        throw error;
      }
     })
     .catch(err => {
      console.error(err);
      Swal.fire(
        'Error',
        'Please try again!',
        'error'
      );
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
      end_hour: new Date(returnValue.getTime() + 30*60000).getHours(),

      end_minutes: new Date(returnValue.getTime() + 30*60000).getMinutes()
    }

    console.log("inside handle submit close:", reservationReturnObj);

    let reservation_date = reservationReturnObj.reservation_date;
    let start_hour = reservationReturnObj.start_hour;
    let start_minutes = reservationReturnObj.start_minutes;
    let end_minutes = reservationReturnObj.end_minutes;
    let end_hour = reservationReturnObj.end_hour;
    //Send data to server
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
      <DialogTitle>Create reservation at {store_name}!</DialogTitle>
      <DialogContent>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <DialogContentText>
              Remaining spots: {remainingCapacity}
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
              disabled
              minDate={new Date(value)}
              maxDate={new Date(value)}
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