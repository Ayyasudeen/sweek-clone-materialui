import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
  root: {
    height: "100vh",
  },
  container: {
    maxWidth: 1410,
  },
});

const TurnStories = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth="false" className={classes.container}>
        <h2>TURN STORIES INTO BOOKS WITH SWEEK PUBLISHING</h2>
      </Container>
    </section>
  );
};

export default TurnStories;
