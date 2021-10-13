import { Container, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    backgroundImage: "url(/assets/images/start-using.jpg)",
    height: "100vh",
  },
  container: {
    maxWidth: 1410,
  },
});

const StartUsing = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth="false" className={classes.container}></Container>
    </section>
  );
};

export default StartUsing;
