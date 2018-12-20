import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 345,
    display: "block",
    width: "50vw",
    margin: "auto",
    border: "1px solid black",
    background: "#e0e0e0",
    alignItems: "center",
    marginBottom: "5px",
    textAlign: "center"
  },
  media: {
    height: 140
  }
};

// const Food = props => {
//   return (
//     <div>
//       <h4>{props.food}</h4>
//       <img src={props.image} alt={props.food} />
//       <p>
//         Best time to eat: <span>{props.time}</span>
//       </p>
//     </div>
//   );
// };

const Food = props => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <Typography variant="h4" gutterBottom>
        {props.food}
      </Typography>
      <CardActionArea>
        <CardMedia className={classes.media} image={props.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Best time to eat:
          </Typography>
          <Typography component="p">{props.time}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default withStyles(styles)(Food);
