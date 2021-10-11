import { Button, Container, makeStyles } from "@material-ui/core";
import React from "react";
import { Colors } from "../../helpers/Colors";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    backgroundImage: "url(/assets/images/woman-sitting.jpg)",
    objectFit: "cover",
    backgroundPosition: "50% 50%",
  },
  container: {
    maxWidth: 1410,
  },
  button: {
    borderRadius: 0,
    backgroundColor: Colors.primary,
    color: Colors.white,
    fontSize: 24,
    padding: "10px 65px",
    marginTop: 15,
  },
  font1: {
    fontSize: 38,
    fontWeight: 900,
    margin: 0,
    paddingTop: 220,
    color: "black",
  },
  font2: {
    fontSize: 18,
    fontWeight: 400,
    maxWidth: 584,
  },
});

const StartWriting = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth="false" className={classes.container}>
        <h2 className={classes.font1}>START WRITING</h2>
        <p className={classes.font2}>
          Sweek is the ideal writing app for both established and aspiring
          authors to reach a wide audience. Publish your book, poetry or short
          stories. Not sure how to write a story yet? Test your skills in
          creative writing by joining Sweek writing contests. Get your book
          published by an established publishing house.
        </p>
        <Button className={classes.button} variant="contained" disableElevation>
          START
        </Button>
      </Container>
    </section>
  );
};

// comment check

export default StartWriting;

// comment check npm install
