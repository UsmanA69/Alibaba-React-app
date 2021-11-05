import * as React from "react";
import Button from "@mui/material/Button";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Typography from "@mui/material/Typography";

export default function NavbarBtn() {
  return (
    <>
      <div className="navbar-btn">
      <Button color="inherit" sx={{ marginRight: "5px", marginLeft: "auto" }}>
        <PersonOutlineOutlinedIcon />
        <Typography variant="p">
          <span style={{ border: "1px solid grey" }}>Sign In </span> <br />{" "}
          <span style={{ border: "1px solid grey" }}>Join free</span>
        </Typography>
      </Button>
      <Button color="inherit" sx={{ marginRight: "5px", display: "block" }}>
        <div className="btn-div">
          <TextsmsOutlinedIcon />
        </div>
        <div className="btn-div">
          <Typography variant="p">
            <span>Masseges</span>
          </Typography>
        </div>
      </Button>
      <Button color="inherit" sx={{ marginRight: "5px", display: "block" }}>
        <div className="btn-div">
          <img width="30px" src="images/order-food.png" alt="" />
        </div>
        <div className="btn-div">
          <Typography variant="p">
            <span>Orders</span>
          </Typography>
        </div>
      </Button>
      <Button color="inherit" sx={{ marginRight: "5px", display: "block" }}>
        <div className="btn-div">
          <ShoppingCartOutlinedIcon />
        </div>
        <div className="btn-div">
          <Typography variant="p">
            <span>Cart</span>
          </Typography>
        </div>
      </Button>
      </div>
    </>
  );
}
