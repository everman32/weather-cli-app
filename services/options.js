import { Command } from "commander";

const getOptions = () => {
  const program = new Command();
  program
    .option(
      "-c, --city <string>",
      "specify the city for which you want to know the weather"
    )
    .option(
      "-t, --token <string>",
      "determine the token used to access the weather API"
    )
    .parse();
  return program.opts();
};
export default getOptions;
