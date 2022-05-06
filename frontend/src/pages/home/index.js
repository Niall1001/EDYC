import { Grid } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { About, FindUs } from "./components";

const Home = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={12} md={12} style={{ margin: "20px" }}>
          <About />
        </Grid>
        <Grid item xs={12} md={12} style={{ margin: "20px" }}>
          <FindUs />
        </Grid>
        <Grid item xs={12} md={12} style={{ margin: "20px" }}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
