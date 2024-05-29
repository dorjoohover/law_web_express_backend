const express = require("express");
const Requests = require("../modals/request");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const requests = await Requests.find();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// router.get("/user", async (req, res) => {
//   try {
//     const requests = await requests.find({user: req.user._id});
//     res.json(requests);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
router.post("/",  async (req, res) => {
  try {
    const requests = await Requests.create(req.body);
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const body = req.body;
  const requests = await Requests.findByIdAndUpdate(req.params.id, body);
  res.json(requests);
});
router.get("/:id", async (req, res) => {
  try {
    const requests = await Requests.findById(req.params.id);
    res.json(requests);
  } catch (error) {}
});

module.exports = router;
