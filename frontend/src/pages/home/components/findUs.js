import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import GoogleMap from "./googleMap";

const FindUs = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Item sx={{ height: "100%" }}>
      <div style={{ fontSize: "20", fontWeight: "bold", color: "#83314E" }}>
        Find us!
      </div>
      <GoogleMap />
    </Item>
  );
};

export default FindUs;
