const { connect, connection } = require("mongoose");

const connectDB = async () => {
  try {
    await connect("mongodb://localhost:27017/expense-tracker");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { connectDB, connection };
