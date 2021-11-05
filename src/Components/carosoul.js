import React from "react";
import Carousel from "react-material-ui-carousel";
// import { Paper, Button } from '@material-ui/core';
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

function Carousell(props) {
  const items = [
    {
      image: "images/Carousel-imgs/carousel1.png",
    },
    {
      image: "images/Carousel-imgs/carousel2.jpg",
    },
    {
      image: "images/Carousel-imgs/carousel3.png",
    },
    {
      image: "images/Carousel-imgs/carousel4.png",
    },
    {
      image: "images/Carousel-imgs/carousel5.jpg",
    },
    {
      image: "images/Carousel-imgs/carousel6.jpg",
    },
    {
      image: "images/Carousel-imgs/carousel7.jpg",
    },
  ];

  return (
    <Carousel className='carousel'>
      {items.map((item, i) => (
        <Item key={i} {...item} />
      ))}
    </Carousel>
  );
}
const Item = ({ image }) => {
  return (
      <img
        src={image}
        alt=""
        width="100%"
      />
  );
};

export default Carousell;
