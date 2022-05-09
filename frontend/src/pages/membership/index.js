import { Grid } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { MemberHome, MemberImages } from "./components";

const MemberShip = () => {
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
        <Grid item xs={12} md={12} style={{ margin: "25px"}}>
          <MemberHome />
        </Grid>
        <Grid item xs={12} md={12} style={{ margin: "25px", marginTop: "10px"}}>
          <MemberImages />
        </Grid>
      </Grid>
    </div>
  );
};

export default MemberShip;
