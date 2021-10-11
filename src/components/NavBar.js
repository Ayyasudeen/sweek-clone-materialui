import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Colors } from "../helpers/Colors.js";
import {
  Container,
  FormControl,
  Link,
  MenuItem,
  Select,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: "100%",
    position: "fixed",
    zIndex: 99,
  },
  menuButton: {
    marginRight: 20,
  },
  title: {
    flexGrow: 1,
    maxWidth: 1410,
  },
  appbar: {
    height: 50,
    justifyContent: "center",
    color: Colors.white,
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    color: "white",
  },
  link: {
    marginRight: 25,
    fontSize: 12,
  },
  logo: {
    height: "20px",
    margin: "auto",
    marginRight: 15,
  },
  language: {
    fontSize: 13,
    color: Colors.white,
  },
  select: {
    "&:after": {
      borderBottomColor: "#00c8c8",
    },
    "& .MuiSvgIcon-root": {
      color: "white",
    },
    "&:before": {
      borderBottomColor: "#00c8c8",
    },
    "&:not(.Mui-disabled):hover::before": {
      borderColor: "#00c8c8",
    },
    marginLeft: 570,
    marginTop: 3,
  },
  button: {
    borderRadius: 0,
    minWidth: 97,
    height: 33,
    marginTop: 3,
  },
});

export default function NavBar() {
  const classes = useStyles();

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static" elevation={0}>
        <Toolbar>
          <Container
            maxWidth={false}
            className={`${classes.title} ${classes.flex}`}
          >
            <div className={classes.flex}>
              <a className={classes.logo} href="#home">
                <img
                  src="/assets/images/sweek_logo.svg"
                  alt="logo"
                  className={classes.logo}
                />
              </a>
              <nav className={classes.nav}>
                <Link
                  className={classes.link}
                  variant="button"
                  color="inherit"
                  href="#"
                >
                  Read stories
                </Link>
                <Link
                  className={classes.link}
                  variant="button"
                  color="inherit"
                  href="#"
                >
                  Write stories
                </Link>
                <Link
                  className={classes.link}
                  variant="button"
                  color="inherit"
                  href="#"
                >
                  Writing contests
                </Link>
                <Link
                  className={classes.link}
                  variant="button"
                  color="inherit"
                  href="#"
                >
                  Self-publishing
                </Link>
              </nav>
            </div>
            <div>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty={true}
                  inputProps={{ "aria-label": "Without label" }}
                  className={`${classes.language} ${classes.select}`}
                >
                  <MenuItem value={""}>English</MenuItem>
                  <MenuItem value={"Tamil"}>Tamil</MenuItem>
                  <MenuItem value={"Arabic"}>Arabic</MenuItem>
                  <MenuItem value={"Hindi"}>Hindi</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <Button
                className={classes.button}
                variant="outlined"
                color="inherit"
              >
                Login
              </Button>
            </div>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}
