import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Colors } from "../../helpers/Colors";

const useStyles = makeStyles({
  root: {
    position: "relative",
    height: "58rem",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: -1,
      backgroundColor: "#00c8c8",
    },
    "&::after": {
      content: '""',
      backgroundImage: 'url("/assets/images/bg-illustration.png")',
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: 0.5,
      zIndex: -1,
    },
  },
  container: {
    maxWidth: 1410,
  },
  font1: {
    fontSize: 38,
    paddingTop: 60,
    fontWeight: 800,
    color: Colors.white,
  },
  font2: {
    fontSize: 18,
    color: Colors.white,
    textAlign: "left",
  },
  font3: {
    fontSize: 24,
    color: Colors.white,
    textAlign: "center",
    fontWeight: 700,
  },
  mobileImage: {
    height: 500,
  },
  flex: {
    display: "flex",
    textAlign: "center",
  },
  imageSection: {
    textAlign: "center",
    flex: 1,
  },
});

const FreeReading = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth="false" className={`${classes.container}`}>
        <Typography variant="h2" className={classes.font1}>
          FREE READING AND WRITING APP
        </Typography>
        <p className={classes.font2}>
          Sweek is a global community for reading and writing stories. Short
          stories, poetry, fantasy, science fiction, fanfiction, or classic
          books - you will find thousands of them on Sweek.
        </p>
        <div className={classes.flex}>
          <div className={classes.imageSection}>
            <img
              className={classes.mobileImage}
              src="/assets/images/read-phone.png"
              alt="read-phone"
            />
            <Typography variant="h3" className={classes.font3}>
              Read
            </Typography>
            <p className={classes.font2}>
              Whether you are commuting or at home, whether you are into short
              stories or addictive serials: you can find them all on Sweek. Your
              reading progress is always saved, and you’ll never miss an update!
            </p>
          </div>
          <div className={classes.imageSection}>
            <img
              className={classes.mobileImage}
              src="/assets/images/write-phone.png"
              alt="read-phone"
            />
            <Typography variant="h3" className={classes.font3}>
              Write
            </Typography>
            <p className={classes.font2}>
              Write and publish your stories in just a few steps, wherever you
              are. Join Sweek writing competitions to win cash prizes or get
              your book published by a well-known publisher. Build your fan base
              and get feedback from your readers.
            </p>
          </div>
          <div className={classes.imageSection}>
            <img
              className={classes.mobileImage}
              src="/assets/images/connect-phone.png"
              alt="read-phone"
            />
            <Typography variant="h3" className={classes.font3}>
              Connect
            </Typography>
            <p className={classes.font2}>
              Join the Sweek global community! Connect with readers and writers
              and discuss the latest plot twists. Become a part of the story -
              give feedback to the author in comments or message them directly.
              Share your favorite stories with your friends!
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FreeReading;
