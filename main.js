import { getTweets } from "./modules/get_tweets.js";
import { styleJson } from "./modules/style_json.js";
import { jsonToCsv } from "./modules/json_to_csv.js";

async function makeStyledJson() {
  const userTweetsJson = await getTweets()
    .then((data) => {
      return styleJson(data);
    })
    .then((data) => {
      return jsonToCsv(data);
    });

  return console.log(userTweetsJson);
}

makeStyledJson();
