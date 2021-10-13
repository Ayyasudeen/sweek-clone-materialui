import { CssBaseline, makeStyles } from "@material-ui/core";
import NavBar from "./components/NavBar";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00c8c8",
    },
    secondary: {
      main: green[500],
    },
    textPrimary: {
      main: "#ffffff",
    },
  },
});

const useStyles = makeStyles({
  appBorder: {},
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appBorder}>
        <CssBaseline />
        <NavBar />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
