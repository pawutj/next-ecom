import React from "react";
import Head from "next/head";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import useStyles from "../utils/styles";
const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Next Amazona</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>amazona</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All Right reserve</Typography>
      </footer>
    </div>
  );
};

export default Layout;
