import mongoose from "mongoose";

const mongoURI =
  "mongodb+srv://ashishgk1999:unPylsSSC18p2ueC@cluster0.kf46zfp.mongodb.net/";

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log(`Error in connecting to the database ${error}`);
  });
