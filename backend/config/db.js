const mongoose = require("mongoose");

const URL = process.env.MONGO_URL || " ";
const ConnectedDB = async () => {
  try {
    const connected = await mongoose.connect(URL);
    console.log(`connected ${connected.connection.host}`);
  } catch (error) {
    console.log("error");
  }
};

module.exports = ConnectedDB;
