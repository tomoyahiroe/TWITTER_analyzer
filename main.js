import { getTweets } from "./modules/get_tweets.js";
import { createStyledJson } from "./modules/style_json.js";
import { jsonToCsv } from "./modules/json_to_csv.js";
import { writeFile } from "./modules/write_file.js";

async function createCsvFile() {
  const tweets = await getTweets();
  const styledJson = createStyledJson(tweets);
  const csv = jsonToCsv(styledJson);
  await writeFile(csv);
}

createCsvFile();
