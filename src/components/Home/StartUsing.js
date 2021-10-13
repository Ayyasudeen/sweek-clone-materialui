import { Button, Container, makeStyles } from "@material-ui/core";
import React from "react";
import { Colors } from "../../helpers/Colors";

const useStyles = makeStyles({
  root: {
    backgroundImage: "url(/assets/images/start-using.jpg)",
    height: "105vh",
    objectFit: "contain",
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
    marginTop: 45,
    marginBottom: 45,
  },
  image: {
    "& img": {
      height: 41,
      marginRight: 10,
    },
  },
  font1: {
    fontSize: 38,
    fontWeight: 900,
    color: "white",
    margin: 0,
    paddingTop: 230,
  },
  font2: {
    fontSize: 18,
    fontWeight: 400,
    color: "white",
    margin: 0,
  },
});

const StartUsing = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth="false" className={classes.container}>
        <h2 className={classes.font1}>START USING SWEEK NOW</h2>
        <p className={classes.font2}>
          Join a global community of readers and writers
        </p>
        <Button className={classes.button} variant="contained" disableElevation>
          JOIN TODAY
        </Button>
        <div className={classes.image}>
          <img src="/assets/images/googleplay.svg" alt="google-playstore" />
          <img src="/assets/images/applestore.svg" alt="apple-playstore" />
        </div>
      </Container>
    </section>
  );
};

export default StartUsing;
