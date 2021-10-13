import { Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Colors } from "../../helpers/Colors";

const useStyles = makeStyles({
  root: {
    height: "115vh",
    paddingTop: 50,
  },
  container: {
    maxWidth: 1410,
    display: "flex",
  },
  button: {
    borderRadius: 0,
    backgroundColor: Colors.primary,
    color: Colors.white,
    fontSize: 24,
    padding: "10px 65px",
    marginTop: 50,
  },
  image: {
    height: 632,
  },
  table: {
    backgroundColor: "white",
    padding: 30,
    "& table": {
      width: "100%",
    },
  },
  tableCaption: {
    textAlign: "start",
    fontSize: 18,
    fontWeight: 400,
  },
  tableRow: {
    "& :nth-child(2)": {
      textAlign: "end",
      borderBottom: "1px solid #e6e6e6",
      fontSize: 18,
      fontWeight: 400,
    },
    "& :nth-child(1)": {
      borderBottom: "1px solid #e6e6e6",
      fontSize: 18,
      fontWeight: 400,
      paddingTop: 5,
    },
  },

  font1: {
    fontSize: 38,
    fontWeight: 900,
    lineHeight: "46px",
  },
  font2: {
    fontSize: 18,
    fontWeight: 400,
    color: "#808080",
  },
  ul: {
    "& li": {
      marginBottom: 25,
    },
  },
  greyText: {
    color: "#999999",
  },
});

const TurnStories = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth="false" className={classes.container}>
        <img
          className={classes.image}
          src="/assets/images/turn-stories.png"
          alt=""
        />
        <div>
          <h2 className={classes.font1}>
            TURN STORIES INTO BOOKS WITH SWEEK PUBLISHING
          </h2>
          <p className={classes.font2}>
            Have you always wondered how to publish a book? Sweek has the
            solution for you. We will guide you from manuscript to cover design
            with Sweek Publishing. At no cost!
          </p>
          <ul className={`${classes.font2} ${classes.ul}`}>
            <li>
              Sell books globally as paperback and ebook directly to your fan
              base via social media, the Sweek webshop and via relevant
              bookshops
            </li>
            <li>
              Publish for free and earn a very attractive royalty per sold copy
              (up to 60% of the sales price). It’s easy and fast - publish your
              book today!
            </li>
            <li>It’s easy and fast - publish your book today!</li>
          </ul>
          <div className={classes.table}>
            <table>
              <caption className={classes.tableCaption}>
                Example paperback pocket book - 150 pages - paper cream
              </caption>
              <tbody>
                <tr className={classes.tableRow}>
                  <td>Sales price</td>
                  <td>$14.99</td>
                </tr>
                <tr className={classes.tableRow}>
                  <td className={classes.greyText}>
                    Net sales price (excl. tax)
                  </td>
                  <td className={classes.greyText}>$14.99</td>
                </tr>
                <tr className={classes.tableRow}>
                  <td>Your margin</td>
                  <td>$5.77</td>
                </tr>
              </tbody>
            </table>
            <em className={classes.greyText}>
              That's 38% of the net sales price
            </em>
          </div>
          <Button
            className={classes.button}
            variant="contained"
            disableElevation
          >
            MORE INFO
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default TurnStories;
