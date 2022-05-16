import React, { useState, useEffect } from "react";
// import Carousel from "react-material-ui-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import edyclogo from "../../../images/edyclogo.jpg";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import instance from "../../../utils/axios";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getFile = async (filename) => {
    const encodedFilename = encodeURIComponent(filename);
    return await instance.get(`/file/${encodedFilename}`);
  };

  const getData = async () => {
    const newsRes = await instance.get("/news/");
    console.log(newsRes.data.news);
    setNews(newsRes.data.news);
  };

  return (
    <div>
      <div>
        <div style={{ fontSize: "20", fontWeight: "bold", color: "#83314E" }}>
          Latest Club News
        </div>
        <Carousel
          showStatus={false}
          showArrows={true}
          showIndicators={false}
          autoPlay={true}
          onClickItem={false}
          infiniteLoop={true}
          style={{ height: "100%" }}
        >
          {news.map((item, i) => (
            <Card>
              <CardMedia component="img" image={getFile(item.imagesource)} />
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  {item.name}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="#83314E"
                >
                  {item.date}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button size="small">Continue Reading</Button>
              </CardActions>
            </Card>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default News;
