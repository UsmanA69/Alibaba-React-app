import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

function Products1() {
  const [sproduct, setSProduct] = useState([
    {
      image: "images/products/product7.jpg",
      price: "$3.40",
    },
    {
      image: "images/products/product8.jpg",
      price: "$3.19",
    },
    {
      image: "images/products/product9.jpg",
      price: "$1.33",
    },
  ]);

  const [sproduct1, setSProduct1] = useState([
    {
      image1: "images/products/product10.jpg",
      price1: "$1.99",
    },
    {
      image1: "images/products/product11.jpg",
      price1: "$133.00",
    },
    {
      image1: "images/products/product12.jpg",
      price1: "$1.00",
    },
  ]);

  const [sproduct2, setSProduct2] = useState([
    {
      image2: "images/products/product13.jpg",
      price2: "$65.00",
    },
    {
      image2: "images/products/product14.jpg",
      price2: "$288.10",
    },
    {
      image2: "images/products/product15.jpg",
      price2: "$0.91",
    },
  ]);

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <div className="product-div">
          <div>
            <img
              width="20px"
              style={{ verticalAlign: "middle", marginTop: "-5px" }}
              src="images/products/O1CN01NRSdOO1N2zv6KFoVV_!!6000000001513-0-tps-42-48.jpg"
              alt=""
            />
            <h4 style={{ display: "inline-block" }}>Dropshipping</h4>
          </div>
          {sproduct.map((elem) => {
            const { image, price } = elem;
            return (
              <div
                style={{
                  textAlign: "center",
                  width: "120px",
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
                <p style={{ marginTop: "-22px" }}>1 Piece</p>
              </div>
            );
          })}
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <div className="product-div">
          <div>
            <img
              width="20px"
              style={{ verticalAlign: "middle", marginTop: "-5px" }}
              src="images/products/TB1XEafzAL0gK0jSZFAXXcA9pXa-40-40.png"
              alt=""
            />
            <h4 style={{ display: "inline-block" }}>Global Original Resources</h4>
          </div>
          {sproduct1.map((elem) => {
            const { image1, price1 } = elem;
            return (
              <div
                style={{
                  textAlign: "center",
                  width: "120px",
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
      <Grid item xs={12} sm={6} md={4}>
        <div className="product-div">
          <div>
            <img
              width="20px"
              style={{ verticalAlign: "middle", marginTop: "-5px" }}
              src="images/products/O1CN01caWYqW1cVasvCBKJ2_!!6000000003606-0-tps-46-32.jpg"
              alt=""
            />
            <h4 style={{ display: "inline-block" }}>True View</h4>
          </div>
          {sproduct2.map((elem) => {
            const { image2, price2 } = elem;
            return (
              <div
                style={{
                  textAlign: "center",
                  width: "120px",
                  display: "inline-block",
                }}
              >
                <img
                  width="100px"
                  style={{ margin: "0 !important" }}
                  src={image2}
                  alt=""
                />
                <h5 style={{ marginTop: "-5px" }}>{price2}</h5>
                <p style={{ marginTop: "-22px" }}>1 Piece</p>
              </div>
            );
          })}
        </div>
      </Grid>
    </>
  );
}

export default Products1;
