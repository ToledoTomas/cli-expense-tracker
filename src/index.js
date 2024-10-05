#!/usr/bin/env node

require("./commands");
const { connectDB } = require("./db");

const main = async () => {
  await connectDB();
};

main();
