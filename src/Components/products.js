import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Products1 from "./product1";

function Products() {
  const [product, setProduct] = useState([
    {
      image: "images/products/product1.jpg",
      price: "$40",
    },
    {
      image: "images/products/product2.jpg",
      price: "$30",
    },
    {
      image: "images/products/product3.png",
      price: "$1.59",
    },
  ]);

  const [product1, setProduct1] = useState([
    {
      image1: "images/products/product4.jpg",
      price1: "$5",
    },
    {
      image1: "images/products/product5.png",
      price1: "$7",
    },
    {
      image1: "images/products/product6.jpg",
      price1: "$5.56",
    },
  ]);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Box sx={{ flexGrow: 1,marginTop:'-30px'}}>
        <Grid container spacing={2}  >
          <Grid item xs={12} sm={6} md={6}>
            <div className="product-div">
              <div>
                <img
                  width="20px"
                  style={{ verticalAlign: "middle", marginTop: "-5px" }}
                  src="images/products/TB1jyqhzy_1gK0jSZFqXXcpaXXa-44-44.png"
                  alt=""
                />
                <h4 style={{ display: "inline-block" }}>New Arrivals</h4>
              </div>
              {product.map((elem) => {
                const { image, price } = elem;
                return (
                  <div
                    style={{
                      textAlign: "center",
                      width: "30%",
                      display: "inline-block",
                    }}
                  >
                    <img
                      width="100px"
                      style={{ margin: "0 !important" }}
                      src={image}
                      alt=""
                    />
                    <h5 style={{ marginTop: "-5px" }}>{price}</h5>
                    <p style={{ marginTop: "-22px" }}>Trending Now</p>
                  </div>
                );
              })}
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className="product-div">
              <div>
                <img
                  width="20px"
                  style={{ verticalAlign: "middle", marginTop: "-5px" }}
                  src="images/products/TB1VsukzuH2gK0jSZJnXXaT1FXa-38-34.png"
                  alt=""
                />
                <h4 style={{ display: "inline-block" }}>Top-Ranked Products</h4>
              </div>
              {product1.map((elem) => {
                const { image1, price1 } = elem;
                return (
                  <div
                    style={{
                      textAlign: "center",
                      width: "30%",
                      display: "inline-block",
                    }}
                  >
                    <img
                      width="100px"
                      style={{ margin: "0 !important" }}
                      src={image1}
                      alt=""
                    />
                    <h5 style={{ marginTop: "-5px" }}>{price1}</h5>
                    <p style={{ marginTop: "-22px" }}>1 Piece</p>
                  </div>
                );
              })}
            </div>
          </Grid>

        <Products1 /> 
        </Grid>
          
      </Box>
    </>
  );
}

export default Products;
