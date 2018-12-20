import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Food from "./Food.js";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

const CenteredGrid = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <Food />
        </Grid>
        <Grid item xs={6}>
          <Food />
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <Food />
        </Grid>
        <Grid item xs={6}>
          <Food />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(CenteredGrid);
