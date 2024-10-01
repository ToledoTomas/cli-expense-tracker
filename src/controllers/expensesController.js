const Expense = require("../models/Expense");
const { connection } = require("../db");

const addExpense = async expense => {
  const newExpense = await Expense.create(expense);
  await newExpense.save(expense);
  await connection.close();

  console.log("Expense added successfully: ", expense.title);
};

const getExpenses = async () => {
  const expenses = await Expense.find();
  const result = expenses.map(e => {
    return {
      id: e._id.toString(),
      title: e.title,
      description: e.description,
      amount: e.amount,
      date: e.createdAt.toISOString().split("T")[0],
    };
  });
  await connection.close();
  console.log(result);
};

const summaryExpenses = async () => {
  const expenses = await Expense.find();
  const result = expenses.map(exp => {
    let num = exp.amount;
    return num;
  });
  const sum = result.reduce((a, b) => a + b, 0);
  await connection.close();
  console.log({ total_expenses: sum });
};

module.exports = {
  addExpense,
  getExpenses,
  summaryExpenses,
};
