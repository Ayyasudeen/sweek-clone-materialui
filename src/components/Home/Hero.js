import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Colors } from "../../helpers/Colors.js";

const useStyles = makeStyles({
  root: {
    backgroundImage: `linear-gradient(
        66deg, rgba(0,0,0,.85), rgba(0,0,0,.7) 25%,rgba(0,0,0,.3) 50%,rgba(0,0,0,.1) 75%,rgba(0,0,0,0)), url("/assets/images/hero.jpg")`,
    height: "43rem",
    backgroundSize: "contain",
    backgroundPosition: "0px 40px",
  },
  button: {
    borderRadius: 0,
    backgroundColor: Colors.primary,
    color: Colors.white,
    fontSize: 24,
    padding: "10px 65px",
    marginTop: 44,
  },
  color: {
    color: Colors.white,
  },
  logo: {
    height: 48,
    marginTop: 200,
    marginBottom: 60,
  },
  container: {
    maxWidth: 1410,
  },
  font1: {
    fontSize: 60,
    margin: 0,
    fontWeight: 700,
  },
  font2: {
    fontSize: 24,
    margin: 0,
    maxWidth: "70%",
    lineHeight: 1.2,
  },
});

const Hero = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth="false" className={classes.container}>
        <div className={classes.color}>
          <img
            src="/assets/images/sweek_hero_logo.svg"
            alt="hero_logo"
            className={classes.logo}
          />
          <Typography vaiant="h1" className={classes.font1}>
            Read, write and share stories
          </Typography>
          <p className={classes.font2}>
            Read thousands of free books and stories. Challenge yourself in
            writing. Join the global community of readers and writers.
          </p>
          <Button
            className={classes.button}
            variant="contained"
            disableElevation
          >
            SIGN UP TODAY
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
