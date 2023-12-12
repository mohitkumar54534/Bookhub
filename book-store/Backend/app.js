const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
 const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router);
const PORT=process.env.PORT || 5002
mongoose
  .connect(
    "mongodb+srv://admin:EqGcKCuOFuO66gns@cluster0.y8zmjvt.mongodb.net/bookstore?retryWrites=true&w=majority"     //EqGcKCuOFuO66gns
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is listening at ${PORT}`);
    });
  })
  .catch((err) => console.log(err));