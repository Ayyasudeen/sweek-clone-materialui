import { Button, Container, makeStyles } from "@material-ui/core";
import { flexbox } from "@mui/system";
import React from "react";

const useStyles = makeStyles({
  root: {
    height: 510,
    backgroundColor: "#666666",
    color: "white",
    textDecoration: "none",
  },
  container: {
    maxWidth: 1410,
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    height: 32,
  },
  footer2: {
    display: "flex",
    flexDirection: "column",
    marginRight: 30,
    "& a": {
      textDecoration: "none",
      color: "white",
      fontSize: 17,
      marginBottom: 5,
    },
    "& p": {
      fontSize: 20,
      fontWeight: 500,
      marginBottom: 30,
    },
  },
  footer1: {
    display: "flex",
    marginBottom: 60,
  },
  left: {
    marginTop: 50,
  },
  button: {
    borderRadius: 0,
    fontSize: 20,
    fontWeight: 400,
    padding: "5px 50px",
    marginTop: 30,
    backgroundColor: "inherit",
    color: "white",
    maxWidth: 310,
    lineHeight: "30px",
  },
  right: {
    width: 470,
    marginTop: 45,
    "& h5": {
      fontSize: 20,
      fontWeight: 500,
    },
    "& p": {
      fontSize: 17,
    },
  },
  icons: {
    "& img": {
      height: 40,
      marginRight: 40,
      marginTop: 80,
    },
  },
  copy: {
    fontSize: 17,
    fontWeight: 400,
    marginTop: 0,
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Container className={classes.container}>
        <div className={classes.left}>
          <div className={classes.footer1}>
            <div className={classes.footer2}>
              <p>ABOUT</p>
              <a href="#">About Sweek</a>
              <a href="#">Read stories</a>
              <a href="">Write stories</a>
              <a href="">Writing contests</a>
              <a href="">Self-publishing</a>
              <a href="">Blog</a>
            </div>
            <div className={classes.footer2}>
              <p>SUPPORT</p>
              <a href="#">Contact</a>
              <a href="#">FAQ</a>
              <a href="">Community guidelines</a>
              <a href="">Privacy</a>
              <a href="">Terms of use</a>
            </div>
            <div className={classes.footer2}>
              <p>WORK WITH US</p>
              <a href="#">Partnerships</a>
              <a href="#">Media</a>
              <a href="">Sweek vacancies</a>
            </div>
          </div>
          <a href="#">
            <img
              className={classes.logo}
              src="/assets/images/sweek_hero_logo.svg"
              alt="footer-logo"
            />
          </a>
          <p className={classes.copy}>&copy; Sweek. All Rights Reserved</p>
        </div>
        <div className={classes.right}>
          <h5>SIGN UP FOR OUR NEWSLETTER</h5>
          <p>
            You will receive updates with the latest information about our
            writing competitions, new functionalities and much more.
          </p>
          <Button
            className={classes.button}
            variant="outlined"
            color="inherit"
            disableElevation
          >
            SIGN UP FOR OUR NEWSLETTER
          </Button>
          <div className={classes.icons}>
            <img src="/assets/images/fb-icon.svg" alt="" />
            <img src="/assets/images/twitter-icon.svg" alt="" />
            <img src="/assets/images/linkedin-icon.svg" alt="" />
            <img src="/assets/images/insta-icon.svg" alt="" />
            <img src="/assets/images/yt-icon.svg" alt="" />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
