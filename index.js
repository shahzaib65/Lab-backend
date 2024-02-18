const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const dotenv = require("dotenv");
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });

  const app = express();

app.use(express.json());
app.use(cookieParser());
 app.get("/fetch",async(req,res)=>{
  res.status(200).json("working")
 });

 app.use("/api/auth",require("./router/User"));
 app.use("/api/leave", require("./router/Leaves"));
 app.use("/api/timings",require("./router/Timings"));


app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});