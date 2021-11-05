import "./App.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";
import CarouselPart from "./Components/carouselPart";
import PrimarySearchAppBar from "./Components/navbar";
import Carousell from "./Components/carosoul";
import Products from "./Components/products";
import Button from "@mui/material/Button";
import Vector from "./Components/vectorPart";

function App() {
  const [close, setClose] = useState(false);

  const closebtn = () => {
    setClose(!close);
    console.log(close);
  };
  return (
    <>
      <img
        className="gifimg"
        src="images/O1CN01LBg8nx1tYCeLFwjRa_!!6000000005913-1-tps-47-124.gif"
        alt=""
      />
      <PrimarySearchAppBar />
      <br />

      {close ? (
        <div style={{ display: "none" }}></div>
      ) : (
        <div
          style={{
            textAlign: "center",
            marginTop: "-15px",
            background: "#e6f2fe",
            border: "1px solid lightgrey",
          }}
        >
          <p style={{ display: "inline-block" }}>
            <img
              style={{ verticalAlign: "top" }}
              src="images/bulb-blue.svg"
              alt=""
            />
            See FAQs on the coronavirus (COVID-19) and Alibaba.com shipments
            <a
              style={{
                textDecoration: "none",
                color: "black",
                margin: "5px",
              }}
              href="#"
            >
              Learn more{" "}
              <KeyboardArrowRightIcon sx={{ verticalAlign: "top" }} />
            </a>
          </p>
          <Button onClick={closebtn} sx={{ display: "inline-block" }}>
            Close
          </Button>
        </div>
      )}

      <div style={{ background: "#f2f3f7" }}>
        <br />
        <CarouselPart />
      </div>
      <br />
      <br />
      <br />
      <Products />
      <br />
      <br />
      <Vector />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
        assumenda aut omnis sequi voluptas nobis odit ipsum distinctio nam magni
        culpa, hic quo eum error, ipsa in praesentium! Quasi, tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
        assumenda aut omnis sequi voluptas nobis odit ipsum distinctio nam magni
        culpa, hic quo eum error, ipsa in praesentium! Quasi, tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
        assumenda aut omnis sequi voluptas nobis odit ipsum distinctio nam magni
        culpa, hic quo eum error, ipsa in praesentium! Quasi, tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
        assumenda aut omnis sequi voluptas nobis odit ipsum distinctio nam magni
        culpa, hic quo eum error, ipsa in praesentium! Quasi, tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
        assumenda aut omnis sequi voluptas nobis odit ipsum distinctio nam magni
        culpa, hic quo eum error, ipsa in praesentium! Quasi, tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
        assumenda aut omnis sequi voluptas nobis odit ipsum distinctio nam magni
        culpa, hic quo eum error, ipsa in praesentium! Quasi, tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
        assumenda aut omnis sequi voluptas nobis odit ipsum distinctio nam magni
        culpa, hic quo eum error, ipsa in praesentium! Quasi, tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
        assumenda aut omnis sequi voluptas nobis odit ipsum distinctio nam magni
        culpa, hic quo eum error, ipsa in praesentium! Quasi, tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
        assumenda aut omnis sequi voluptas nobis odit ipsum distinctio nam magni
        culpa, hic quo eum error, ipsa in praesentium! Quasi, tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
        assumenda aut omnis sequi voluptas nobis odit ipsum distinctio nam magni
        culpa, hic quo eum error, ipsa in praesentium! Quasi, tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
        assumenda aut omnis sequi voluptas nobis odit ipsum distinctio nam magni
        culpa, hic quo eum error, ipsa in praesentium! Quasi, tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
        assumenda aut omnis sequi voluptas nobis odit ipsum distinctio nam magni
        culpa, hic quo eum error, ipsa in praesentium! Quasi, tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
        assumenda aut omnis sequi voluptas nobis odit ipsum distinctio nam magni
        culpa, hic quo eum error, ipsa in praesentium! Quasi, tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
        assumenda aut omnis sequi voluptas nobis odit ipsum distinctio nam magni
        culpa, hic quo eum error, ipsa in praesentium! Quasi, tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
        assumenda aut omnis sequi voluptas nobis odit ipsum distinctio nam magni
        culpa, hic quo eum error, ipsa in praesentium! Quasi, tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
        assumenda aut omnis sequi voluptas nobis odit ipsum distinctio nam magni
        culpa, hic quo eum error, ipsa in praesentium! Quasi, tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
        assumenda aut omnis sequi voluptas nobis odit ipsum distinctio nam magni
        culpa, hic quo eum error, ipsa in praesentium! Quasi, tenetur!
      </p>
    </>
  );
}

export default App;
