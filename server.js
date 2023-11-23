const mongoose = require("mongoose");
const app = require("./app");

const db = process.env.DATABASE_LINK.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
const port = process.env.PORT;

mongoose
  .connect(db)
  .then(() => {
    console.log("DATABASE CONNECTED");
    app.listen(port, () => {
      console.log(`APP RUNNING ON ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
