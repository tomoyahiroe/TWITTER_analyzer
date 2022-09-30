import { getTweets } from "./modules/get_tweets.js";
import { createStyledJson } from "./modules/style_json.js";
import { jsonToCsv } from "./modules/json_to_csv.js";

async function createCSV() {
  const userTweetsCSV = await getTweets()
    .then((data) => {
      return createStyledJson(data);
    })
    .then((data) => {
      return jsonToCsv(data);
    });

  return userTweetsCSV;
}

createCSV();
