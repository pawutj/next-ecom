import React from "react";
import Head from "next/head";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
} from "@material-ui/core";
import useStyles from "../utils/styles";
import NextLink from "next/link";
const Layout = ({ title, children }) => {
  const classes = useStyles();
  console.log(classes);
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next Amazona` : "Next Amazona"}</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>amazona</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}>
            <NextLink href="/cart" passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
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
