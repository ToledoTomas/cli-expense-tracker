const { connect } = require("mongoose");

const connectDB = async () => {
  try {
    await connect("mongodb://localhost:27017/expense-tracker");
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
