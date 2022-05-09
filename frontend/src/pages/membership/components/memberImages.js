import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import eastDown from "../../../images/east-down.jpg";
const MemberImages = () => {
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
        <Grid item xs={12} md={12}>
        <Item xs={12} md={12} style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            columnCount: 4,
            breakInside: "avoid-column"
          }}>
        <img
          src={eastDown}
          loading="lazy"
          style={{ breakInside: "avoid-column", height: "323px", width: "269px" }}
        />
        <img
          src={eastDown}
          loading="lazy"
          style={{ breakInside: "avoid-column", height: "323px", width: "269px" }}
        />
    <img
      src={eastDown}
      loading="lazy"
      style={{ breakInside: "avoid-column", height: "323px", width: "269px" }}
    />
    <img
      src={eastDown}
      loading="lazy"
      style={{ breakInside: "avoid-column", height: "323px", width: "269px" }}
    />
  </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default MemberImages;
