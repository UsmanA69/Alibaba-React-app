import Grid from "@mui/material/Grid";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Divider from "@mui/material/Divider";
import Market from "../myMarket";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function CarouselPart() {
  const [category, setCategory] = useState(Market);
  const [sCategory, setSCategory] = useState([
    {
      image1: "images/SecondCategory/home.jpg",
      text1: "Home And Garden 2021 Online Trade show",
    },
    {
      image1: "images/SecondCategory/digital.jpg",
      text1: "Digital Booth",
    },
    {
      image1: "images/SecondCategory/products.jpg",
      text1: "Top-Ranking Products",
    },
  ]);

  return (
    <>
      <Grid container direction="row" spacing="10" justifyContent="center">
        <Grid
          item
          xs={12}
          sm={12}
          lg={3}
          sx={{
            border: "1px solid lightgray",
            borderRight: "none",
            background: "white",
          }}
        >
          <Grid item xs={6}>
            <div className="item-div1">
              <a href="#">
                <h3>My Market</h3>
              </a>
            </div>
          </Grid>
          <Divider />
          {category.map((elem) => {
            const { image, text } = elem;
            return (
              <Grid item xs={6}>
                <a href="#" style={{ textDecoration: "none", color: "black" }}>
                  <div className="item-div">
                    <img
                      src={image}
                      alt=""
                      style={{ verticalAlign: "middle" }}
                    />
                    <Typography variant="p"  className="anchhr">
                      {text}
                    </Typography>
                    <KeyboardArrowRightIcon
                      sx={{ verticalAlign: "middle", marginLeft: "auto" }}
                    />
                  </div>
                </a>
              </Grid>
            );
          })}
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          lg={5}
          sx={{
            background: "white",
            border: "1px solid lightgray",
            borderLeft: "none",
            borderRight: "none",
          }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          lg={2}
          sx={{
            border: "1px solid lightgray",
            borderLeft: "none",
            background: "white",
          }}
        >
          <div className="second-ctg" style={{ marginRight: "5px" }}>
            <div className="buyer-exclusive">
              <img width="60px" src="images/SecondCategory/pro.png" alt="" />
              <Typography
                variant="p"
                sx={{
                  color: "#f2cb8e",
                  fontWeight: "500",
                  verticalAlign: "top",
                }}
              >
                Pro Buyer Exclusive
              </Typography>
              <br />
              <Typography
                variant="p"
                sx={{
                  color: "#f2cb8e",
                  fontWeight: "700",
                  verticalAlign: "top",
                  fontSize: "12px",
                }}
              >
                Get payment terms and much more
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: "#f2cb8e",
                  color: "black",
                  fontWeight: "100",
                  borderRadius: "30px",
                  marginTop: "20px",
                  marginBottom: "10px",
                  width: "90%",
                }}
              >
                Upgrade
              </Button>
            </div>
            <Button
              variant="contained"
              color="warning"
              fullWidth={true}
              sx={{ borderRadius: "0", fontSize: "12px", marginTop: "10px" }}
            >
              Home And Garden 2021 Online Trade
            </Button>
            <div>
              <Grid container sx={{ paddingTop: "20px" }}>
                {sCategory.map((Celem) => {
                  const { image1, text1 } = Celem;
                  return (
                    <>
                      <Grid item xs="8">
                        <a
                          href="#"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <Typography variant="h6" sx={{ fontSize: "16px" }}>
                            {text1}
                          </Typography>
                        </a>
                      </Grid>
                      <Grid item xs="4">
                        <img width="60px" src={image1} alt="" />
                      </Grid>
                    </>
                  );
                })}
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default CarouselPart;
