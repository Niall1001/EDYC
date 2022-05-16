import { Grid } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { About, FindUs, News } from "./components";

const Home = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const gridItem = {
    maxHeigh: "50px",
  };
  return (
    <div>
      <Grid container spacing={5}>
        <Grid
          item
          xs={12}
          md={12}
          style={{ marginRight: "20px", marginLeft: "20px" }}
        >
          <About />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{ marginLeft: "20px", marginRight: "20px" }}
          sx={{ height: "300px" }}
        >
          <FindUs />
        </Grid>
        <Grid item xs={12} md={6} style={{ margin: "20px" }}>
          <Item>
            <News />
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
