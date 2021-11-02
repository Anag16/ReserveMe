import { Paper, Typography, Card, CardMedia } from "@mui/material";
import { styled } from "@mui/system";

export default function StoreHeader(props) {
  const { name, image } = props;

  return (
    <Card>
      <Typography
        textAlign="center"
        variant="h4"
      >
        {name}
      </Typography>
      <CardMedia
        component="img"
        height="140"
        image={image}
      >
      </CardMedia>
    </Card>
  )
};