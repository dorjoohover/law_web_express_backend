const { createReadStream } = require("fs");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
// app.use(express.json());

app.use(cors());
app.use(express.json());
mongoose.connect(
  `mongodb+srv://houlenn1:Korakunnie@cluster0.wqt9xlu.mongodb.net/law?retryWrites=true&w=majority`
);
const db = mongoose.connection;
// app.options('*',cors());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

db.once("open", () => console.log("Connected db"));
const upload = require("./uploads");
app.post("/uploads", upload.single("file"), (req, res) => {
  res.json({
    file: req.file.filename,
  });
});
app.get("/", (req, res) => {
  res.json({ text: "test" });
});
app.get("/upload/:file", (req, res) => {
  try {
    const file = createReadStream(
      path.join(__dirname, "./uploads/" + req.params.file)
    );
    res.sendFile(file.path);
  } catch (error) {}
});

const feedback = require("./routes/feedback");
const internship = require("./routes/internship");
const requests = require("./routes/request");
app.use("/feedback", feedback);
app.use("/internship", internship);
app.use("/request", requests);

app.listen(5000, () => {
  console.log("5000");
});
