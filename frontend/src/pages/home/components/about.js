import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import eastDown from "../../../images/east-down.jpg";

const About = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div style={{ display: "flex" }}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={4}>
          <Item
            style={{
              height: "96%",
              display: "flex",
              justifyContent: "center",
              flexFlow: "column",
            }}
          >
            <div
              style={{ fontSize: "20", fontWeight: "bold", color: "#83314E" }}
            >
              About us!
            </div>
            East Down Yacht Club (EDYC) has extensive facilities for both
            cruising and racing. It is located on the western shores of
            Strangford Lough, Co Down, Northern Ireland.
          </Item>
        </Grid>
        <Grid item xs={12} md={8}>
          <Item>
            <img
              src={eastDown}
              loading="lazy"
              style={{ maxHeight: "100%", maxWidth: "100%" }}
            />
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
