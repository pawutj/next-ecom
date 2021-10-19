import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { data } from "../../utils/data";
import Layout from "../../components/Layout";
import NextLink from "next/link";
import Image from "next/image";
import { Link, Grid } from "@material-ui/core";
import useStyles from "../../utils/styles";

function ProductScreen(props) {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => slug == a.slug);
  const classes = useStyles();
  if (!product) {
    return <div> Product Not Found</div>;
  }
  return (
    <Layout title={product.name}>
      <div>
        <NextLink href="/" passHref>
          <Link>back to Main</Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </Grid>
      </Grid>
    </Layout>
  );
}

//[slug].propTypes = {};

export default ProductScreen;
