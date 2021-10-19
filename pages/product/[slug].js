import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { data } from "../../utils/data";
function ProductScreen(props) {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => slug == a.slug);
  if (!product) {
    return <div> Product Not Found</div>;
  }
  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
}

//[slug].propTypes = {};

export default ProductScreen;
