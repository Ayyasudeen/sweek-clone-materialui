import { Button, Container, makeStyles } from "@material-ui/core";
import React from "react";
import { Colors } from "../../helpers/Colors";

const useStyles = makeStyles({
  root: {
    height: 1200,
    backgroundColor: "white",
    paddingTop: 70,
  },
  container: {
    maxWidth: 1410,
  },
  font1: {
    fontSize: 38,
    fontWeight: 900,
    // paddingTop: 20,
    marginTop: 0,
    marginBottom: 5,
  },
  font2: {
    fontSize: 18,
    fontWeight: 400,
    color: "#808080",
    marginTop: 0,
    marginBottom: 0,
  },
  imageSection: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 40,
  },
  image: {
    height: 440,
  },
  button: {
    borderRadius: 0,
    backgroundColor: Colors.primary,
    color: Colors.white,
    fontSize: 24,
    padding: "10px 65px",
    marginTop: 50,
  },
  font3: {
    fontSize: 24,
    fontWeight: 700,
  },
  testimonials: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: 40,
  },
  testimonial: {
    "& p": {
      fontSize: 18,
      fontWeight: 400,
      color: "#808080",
    },
    width: "33%",
  },
  client: {
    display: "flex",
  },
  clientImage: {
    "& img": {
      borderRadius: "50%",
    },
  },
  clientDetails: {
    "& :first-child": {
      fontSize: 17,
      fontWeight: 500,
      color: "black",
    },
    "& :nth-child(2)": {
      fontSize: 14,
      fontWeight: 400,
      color: "#999999",
    },
    "& p": {
      margin: 0,
    },

    marginLeft: 15,
  },
});

const JoinWriting = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth="false" className={classes.container}>
        <h2 className={classes.font1}>JOIN WRITING CONTESTS</h2>
        <p className={classes.font2}>
          On Sweek you can always join multiple free writing contests. Submit
          your flash fiction or participate in a poetry contest and improve your
          writing skills. Get your story published by joining our contests with
          esteemed publishers! Each writing contest has an engaged community of
          readers and writers who are able to help out with valuable feedback.
        </p>
        <p className={classes.font2}>
          Get your story published by joining our contests with traditional
          publishers!
        </p>
        <div className={classes.imageSection}>
          <img
            className={classes.image}
            src="/assets/images/join-writing1.png"
            alt="writing-contest"
          />
          <img
            className={classes.image}
            src="/assets/images/join-writing2.png"
            alt="writing-contest"
          />
          <img
            className={classes.image}
            src="/assets/images/join-writing3.png"
            alt="writing-contest"
          />
        </div>
        <Button className={classes.button} variant="contained" disableElevation>
          JOIN NOW
        </Button>
        <h2 className={classes.font3}>
          See what participants and publishers are saying about Sweek writing
          competitions
        </h2>
        <div className={classes.testimonials}>
          <div className={classes.testimonial}>
            <div className={classes.client}>
              <div className={classes.clientImage}>
                <img src="/assets/images/client1.jpg" alt="client" />
              </div>
              <div className={classes.clientDetails}>
                <p>EDGAR ORDÓÑEZ</p>
                <p>
                  The winner of €1.000 prize in Lahistorialaescribestu contest
                </p>
              </div>
            </div>
            <p>
              The contests are extremely useful for writers, as they not only
              give greater visibility to the winners, but also allow all the
              participants to objectively look at their writing (...) All
              literary awards are an excellent source of motivation to continue
              writing. For that, my most sincere congratulations and gratitude
              to Sweek.
            </p>
          </div>

          <div className={classes.testimonial}>
            <div className={classes.client}>
              <div className={classes.clientImage}>
                <img src="/assets/images/client2.jpg" alt="client" />
              </div>
              <div className={classes.clientDetails}>
                <p>CHRISTIAN VERDÚ</p>
                <p>
                  Director of Consumer Insights and Business <br></br>
                  Development at Penguin Random House Grupo Editorial
                </p>
              </div>
            </div>
            <p>
              Sweek gives Caligrama and Escuela Cursiva the opportunity to
              discover new voices and great stories among more than hundred
              thousand young authors and, in this way, continue fulfilling one
              of our missions within the editorial group that is to work with
              the new literary talent and promote it throughout the
              Spanish-speaking world.
            </p>
          </div>

          <div className={classes.testimonial}>
            <div className={classes.client}>
              <div className={classes.clientImage}>
                <img src="/assets/images/client3.jpg" alt="client" />
              </div>
              <div className={classes.clientDetails}>
                <p>SAMIRA BOSSHARD</p>
                <p>
                  Received a publishing contract from Ravensburger <br></br>
                  Verlag
                </p>
              </div>
            </div>
            <p>
              Without the Ravensburger competition on Sweek I would have never
              published my book. These contests offer young talents the chance
              to get discovered. Meanwhile, it was amazing to receive
              enthusiastic messages from readers. It’s a dream come true.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default JoinWriting;
