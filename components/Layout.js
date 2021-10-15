import React from "react";
import Head from "next/head";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import useStyles from "../utils/styles";
const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Next Amazona</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>amazona</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>All Right reserve</Typography>
      </footer>
    </div>
  );
};

export default Layout;
