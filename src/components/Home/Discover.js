import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Colors } from "../../helpers/Colors";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    backgroundColor: "#F5F5F5",
  },
  container: {
    maxWidth: 1410,
  },
  font1: {
    fontSize: 38,
    fontWeight: 900,
    color: "black",
    paddingTop: 120,
  },
  font2: {
    fontSize: 18,
    color: "#808080",
    fontWeight: 400,
  },
  bookImage: {
    height: 210,
    width: 140,
    objectFit: "cover",
  },
  bookList: {
    display: "flex",
    maxWidth: 1410,
    overflowX: "scroll",
  },

  book: {
    marginRight: 20,
  },
  author: {
    fontSize: 14,
    fontWeight: 400,
    color: "#808285",
    margin: 0,
  },
  name: {
    fontSize: 15,
    fontWeight: 400,
    margin: 0,
  },
  button: {
    borderRadius: 0,
    backgroundColor: Colors.primary,
    color: Colors.white,
    fontSize: 24,
    padding: "10px 65px",
    marginTop: 35,
  },
});

const Discover = () => {
  const classes = useStyles();
  const books = [
    {
      id: 1,
      name: "The Mismatched Half",
      author: "Razzzzzia",
      imageUrl: "/assets/images/1-mismatch.jpg",
      desc: "Anya is divorced at the age of twenty. She runs away from home to a different country in search of a new life. She runs away from fate. Little does she know that one can't run away from fate. She fell in love once and she wasn't ready to fall in love again. But fate had different plans for her, as usual",
    },
    {
      id: 2,
      name: "The Vacation",
      author: "Anne G.",
      imageUrl: "/assets/images/generic-book.png",
      desc: "Anya is divorced at the age of twenty. She runs away from home to a different country in search of a new life. She runs away from fate. Little does she know that one can't run away from fate. She fell in love once and she wasn't ready to fall in love again. But fate had different plans for her, as usual",
    },
    {
      id: 3,
      name: "The Experiment",
      author: "Gothica",
      imageUrl: "/assets/images/generic-book.png",
      desc: "Anya is divorced at the age of twenty. She runs away from home to a different country in search of a new life. She runs away from fate. Little does she know that one can't run away from fate. She fell in love once and she wasn't ready to fall in love again. But fate had different plans for her, as usual",
    },
    {
      id: 4,
      name: "Incomplete #UnbelievableTales...",
      author: "Rachel Wollaston",
      imageUrl: "/assets/images/3-incomplete.png",
      desc: "Anya is divorced at the age of twenty. She runs away from home to a different country in search of a new life. She runs away from fate. Little does she know that one can't run away from fate. She fell in love once and she wasn't ready to fall in love again. But fate had different plans for her, as usual",
    },
    {
      id: 5,
      name: "There Is No Mind Reader",
      author: "T. S. Garrett",
      imageUrl: "/assets/images/4-mindreader.jpg",
      desc: "Anya is divorced at the age of twenty. She runs away from home to a different country in search of a new life. She runs away from fate. Little does she know that one can't run away from fate. She fell in love once and she wasn't ready to fall in love again. But fate had different plans for her, as usual",
    },
    {
      id: 6,
      name: "Two Roads Converged",
      author: "Shahzoda Vareberg",
      imageUrl: "/assets/images/5-tworoads.png",
      desc: "Anya is divorced at the age of twenty. She runs away from home to a different country in search of a new life. She runs away from fate. Little does she know that one can't run away from fate. She fell in love once and she wasn't ready to fall in love again. But fate had different plans for her, as usual",
    },
    {
      id: 7,
      name: "The Imagination Robber: Overture",
      author: "Francesca Martin",
      imageUrl: "/assets/images/generic-book.png",
      desc: "Anya is divorced at the age of twenty. She runs away from home to a different country in search of a new life. She runs away from fate. Little does she know that one can't run away from fate. She fell in love once and she wasn't ready to fall in love again. But fate had different plans for her, as usual",
    },
    {
      id: 8,
      name: "Face Value",
      author: "Erwin Lima",
      imageUrl: "/assets/images/7-facevalue.png",
      desc: "Anya is divorced at the age of twenty. She runs away from home to a different country in search of a new life. She runs away from fate. Little does she know that one can't run away from fate. She fell in love once and she wasn't ready to fall in love again. But fate had different plans for her, as usual",
    },
    {
      id: 9,
      name: "The Muse",
      author: "Mark Groenen [English]",
      imageUrl: "/assets/images/8-muse.jpg",
      desc: "Anya is divorced at the age of twenty. She runs away from home to a different country in search of a new life. She runs away from fate. Little does she know that one can't run away from fate. She fell in love once and she wasn't ready to fall in love again. But fate had different plans for her, as usual",
    },
  ];
  return (
    <section className={classes.root}>
      <Container maxWidth="false" className={classes.container}>
        <Typography variant="h2" className={classes.font1}>
          DISCOVER THOUSANDS OF STORIES
        </Typography>
        <p className={classes.font2}>
          From flash fiction to romance novels - Sweek will provide the best
          reading experience on any of your devices. Not sure which books to
          read? Browse different genres and trending topics. You can easily save
          your favourites in your library to read them offline later!
        </p>
        <div className={classes.bookList}>
          {books.map((book) => (
            <div key={book.id} className={classes.book}>
              <img
                className={classes.bookImage}
                src={book.imageUrl}
                alt="book"
              />
              <p className={classes.author}>{book.author}</p>
              <h4 className={classes.name}>{book.name}</h4>
            </div>
          ))}
        </div>
        <Button className={classes.button} variant="contained" disableElevation>
          MORE STORIES
        </Button>
      </Container>
    </section>
  );
};

export default Discover;
