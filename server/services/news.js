const prisma = require("../utils/prisma");

const getNewsService = async () => {
  return await prisma.news.findMany();
};

const saveNewsService = async (req) => {
  const { name, date, description, text } = req.body;
  //save the images here to munter
  //Then we want to send the source to the next create statement
  const newNews = await prisma.news.create({
    data: {
      name: name,
      date: date,
      description: description,
      text: text,
    },
  });
  return newNews;
};

const deleteNewsService = async (id) => {
  try {
    await prisma.news.delete({
      where: {
        id: parseInt(id),
      },
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getNewsService = getNewsService;
exports.saveNewsService = saveNewsService;
exports.deleteNewsService = deleteNewsService;
