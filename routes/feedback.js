const express = require("express");
const Feedback = require("../modals/feedback");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// router.get("/user", async (req, res) => {
//   try {
//     const feedback = await feedback.find({user: req.user._id});
//     res.json(feedback);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
router.post("/",  async (req, res) => {
  try {
    const feedback = await Feedback.create(req.body);
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const body = req.body;
  const feedback = await Feedback.findByIdAndUpdate(req.params.id, body);
  res.json(feedback);
});
router.get("/:id", async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    res.json(feedback);
  } catch (error) {}
});

module.exports = router;
