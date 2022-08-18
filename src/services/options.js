import { Command, Option } from "commander";

const getOptions = () => {
  const program = new Command();
  program
    .addOption(
      new Option(
        "-c, --city <string>",
        "specify the city for which you want to know the weather",
      ),
    )
    .addOption(
      new Option(
        "-a, --appid <string>",
        "determine the appid used to access the weather API",
      ),
    )
    .addOption(
      new Option("-u, --units <string>", "define units of measurement")
        .choices(["metric", "imperial"])
        .default("metric"),
    )
    .parse();

  return program.opts();
};
export default getOptions;
