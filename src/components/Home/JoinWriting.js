import { ClassNames } from "@emotion/react";
import { Container, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    height: "100vh",
  },
  container: {
    maxWidth: 1410,
  },
});

const JoinWriting = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth="false" className={classes.container}>
        <h2>JOIN WRITING CONTESTS</h2>
      </Container>
    </section>
  );
};

export default JoinWriting;
