const express = require("express");
const { json, urlencoded } = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const { newsRouter } = require("./routers");
const app = express();
const prisma = require("./utils/prisma");

const upload = multer({ dest: "images/" });

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/news", newsRouter);

//@type   POST
//route for post data
app.post("/newsupload", upload.single("file"), async (req, res) => {
  if (!req.file) {
    res.status(400).json({
      error: "No file uploaded",
    });
  } else {
    var imgsrc = req.file.path;
    const { name, date, description, text } = req.body;

    const newNews = await prisma.news.create({
      data: {
        name: name,
        date: date,
        description: description,
        imagesource: imgsrc,
        text: text,
      },
    });
    if (!newNews || newNews.length === 0) return res.sendStatus(400);
    else {
      res.status(200).json({
        newNews,
      });
    }
  }
});

app.get("/file/:filename", function (req, res) {
  console.log(req.params.filename);
  const filePath =
    req.protocol + "://" + host + "/" + decodeURIComponent(req.params.filename);
  res.sendFile(decodeURIComponent(req.params.filename));
});

app.use((err, req, res, next) => {
  res.status(500).send(err);
});
module.exports = app;
