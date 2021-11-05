import React, { useState } from "react";
import Grid from "@mui/material/Grid";

function Vector() {
  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={12} lg={6}>
          <div
            style={{
              background: "white",
              borderRadius: "10px",
              paddingLeft: "10%",
            }}
          >
            <div style={{ display: "inline-block", width: "60%" }}>
              <h1>Customized products</h1>
              <p>
                Partner with one of 60,000 experienced manufacturers with design
                & production
              </p>
            </div>
            <div className="vectorm" style={{ display: "inline-block", width: "40%" }}>
              <img src="images/vectors/vector1.jpg" alt="" />
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  background: "#f7f7f7",
                }}
              >
                <h5>Premium OEM Factories</h5>
                <div>
                  <img
                    style={{ padding: "5px" }}
                    src="images/vectors/vectorimg1.png"
                    alt=""
                  />
                  <img
                    style={{ padding: "5px" }}
                    src="images/vectors/vectorimg2.png"
                    alt=""
                  />
                  <img
                    style={{ padding: "5px" }}
                    src="images/vectors/vectorimg3.png"
                    alt=""
                  />
                </div>
              </div>
              <div
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  background: "#f7f7f7",
                }}
              >
                <h5>Top-Ranked Suppliers</h5>
                <div>
                  <img
                    style={{ padding: "5px" }}
                    src="images/vectors/vectorimg4.png"
                    alt=""
                  />
                  <img
                    style={{ padding: "5px" }}
                    src="images/vectors/vectorimg5.png"
                    alt=""
                  />
                  <img
                    style={{ padding: "5px" }}
                    src="images/vectors/vectorimg6.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <div
            style={{
              background: "white",
              borderRadius: "10px",
              paddingLeft: "10%",
            }}
          >
            <div style={{ display: "inline-block", width: "60%" }}>
              <h1>Ready-to-ship products</h1>
              <p>
                Source from 15 million products that are ready to ship, and
                leave the facility within 15 days.
              </p>
            </div>
            <div className='vectorm' style={{ display: "inline-block", width: "40%" }}>
              <img src="images/vectors/vector2.jpg" alt="" />
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  background: "#f7f7f7",
                }}
              >
                <h5>Fast Dispatch</h5>
                <div>
                  <img
                    style={{ padding: "5px" }}
                    src="images/vectors/vectorimg7.png"
                    alt=""
                  />
                  <img
                    style={{ padding: "5px" }}
                    src="images/vectors/vectorimg3.png"
                    alt=""
                  />
                  <img
                    style={{ padding: "5px" }}
                    src="images/vectors/vectorimg8.png"
                    alt=""
                  />
                </div>
              </div>
              <div
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  background: "#f7f7f7",
                }}
              >
                <h5>Weekly Deals</h5>
                <div>
                  <img
                    style={{ padding: "5px" }}
                    src="images/vectors/vectorimg2.png"
                    alt=""
                  />
                  <img
                    style={{ padding: "5px" }}
                    src="images/vectors/vectorimg5.png"
                    alt=""
                  />
                  <img
                    style={{ padding: "5px" }}
                    src="images/vectors/vectorimg1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Vector;
