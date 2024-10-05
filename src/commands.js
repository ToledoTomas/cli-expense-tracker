const { program } = require("commander");
const { input } = require("@inquirer/prompts");
const {
  addExpense,
  getExpenses,
  summaryExpenses,
  removeExpense,
  findExpense,
} = require("./controllers/expensesController");

program.version("0.0.1").description("Cli for managing expenses");

const answer = async () => {
  const title = await input({
    type: "input",
    name: "title",
    message: "Expense title",
  });

  const description = await input({
    type: "input",
    name: "description",
    message: "Expense description",
  });

  const amount = await input({
    type: "input",
    name: "amount",
    message: "Expense amount",
  });

  return { title, description, amount };
};
program.command("add").action(async () => {
  await addExpense(await answer());
});
program.command("list").action(async () => {
  await getExpenses();
});
program.command("summary").action(async () => {
  await summaryExpenses();
});
program.command("delete <id>").action(async _id => {
  await removeExpense(_id);
});
program.command("find <text>").action(async text => {
  await findExpense(text);
});

program.parse(process.argv);
