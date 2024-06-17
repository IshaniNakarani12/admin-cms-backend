import express from "express";
const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "TODO",
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res, next) => {
  try {
    console.log(req.body);
    res.json({
      status: "success",
      message: "TODO",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
