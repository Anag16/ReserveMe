import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function DayReservationItem(props) {
  const { store_id, user_id, dateString } = props;

  return (
    <div>
      <p>The date is: {dateString}</p>
    </div>
  );

}