const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://rafliahmad505:NFeAnq6IVdbmyUnp@cluster0.uk7jos3.mongodb.net/aties?retryWrites=true&w=majority")
  .then(() => console.log("Database Connected"))
  .catch((error) => console.log(error.message));
