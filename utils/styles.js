import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroudColor: "#203040",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
    },
  },

  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },

  grow: {
    flewGrow: 1,
  },
  main: {
    minHeight: "80vh",
  },

  footer: {
    textAlign: "center",
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default useStyles;
