const { program } = require("commander");
const { input } = require("@inquirer/prompts");

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
  await answer();
});

program.parse(process.argv);
