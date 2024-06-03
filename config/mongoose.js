const mongoose = require("mongoose");


mongoose
  .connect(
    "mongodb+srv://pratha:mbcu8anJc7C3MDwU@cluster0.2vmeowr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,
      sslValidate: false,
    }
  )
  .then(() => {
    console.log("Connecting to MongoDB cloud");
  })
  .catch((err) => {
    console.log(err);
  });
