const {
  getNewsService,
  saveNewsService,
  deleteNewsService,
} = require("../services/news");
const okStatus = 200;
const noContent = 204;
const serverErrorStatus = 500;

const getAllNews = async (req, res) => {
  const news = await getNewsService();
  if (!news || news.length === 0) return res.sendStatus(noContent);
  res.status(okStatus).json({
    news,
  });
};

const saveNews = async (req, res) => {
  const newNews = await saveNewsService(req);
  if (!newNews || newNews.length === 0)
    return res.sendStatus(serverErrorStatus);
  res.sendStatus(noContent);
};

const deleteNews = async (req, res) => {
  const deletedNews = await deleteNewsService(req.params.id);
  if (!deletedNews || deletedNews.length === 0) return res.sendStatus(500);

  res.status(okStatus).json({
    message: `Successfully deleted news article with id: ${req.params.id}`,
  });
};

module.exports = {
  getAllNews,
  deleteNews,
  saveNews,
};
