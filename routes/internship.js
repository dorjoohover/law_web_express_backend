const express = require("express");
const Internship = require("../modals/internship");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const internship = await Internship.find();
    res.json(internship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// router.get("/user", async (req, res) => {
//   try {
//     const internship = await Internship.find({user: req.user._id});
//     res.json(internship);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
router.post("/",  async (req, res) => {
  try {
    const internship = await Internship.create(req.body);
    res.json(internship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const body = req.body;
  const internship = await Internship.findByIdAndUpdate(req.params.id, body);
  res.json(internship);
});
router.get("/:id", async (req, res) => {
  try {
    const internship = await Internship.findById(req.params.id);
    res.json(internship);
  } catch (error) {}
});

module.exports = router;
