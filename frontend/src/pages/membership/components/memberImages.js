import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import eastDown from "../../../images/east-down.jpg";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

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
        <Grid item xs={12} md={4}>
  <Item xs={12} md={4} style={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    columnCount: 4,
    breakInside: "avoid-column"
  }}>
  <Card sx={{ maxWidth: 345, margin: "10px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={eastDown}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Family
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Members who are parents or guardians with children under the age of 18 or in University
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Item>
    </Grid>
    <Grid item xs={12} md={4}>
  <Item xs={12} md={4} style={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    columnCount: 4,
    breakInside: "avoid-column"
  }}>
    <Card sx={{ maxWidth: 345, margin: "10px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={eastDown}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Single
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Members who are 18 years of age and over, with discounted rates for those under 30 years old
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Item>
    </Grid>
    <Grid item xs={12} md={4}>
  <Item xs={12} md={4} style={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    columnCount: 4,
    breakInside: "avoid-column"
  }}>
    <Card sx={{ maxWidth: 345, margin: "10px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={eastDown}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Temp
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Temp Description
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Item>
    </Grid>
        </Grid>
    </div>
  );
};

export default MemberImages;
