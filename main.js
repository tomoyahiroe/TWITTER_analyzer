import { getTweets } from "./get_tweets.js";
import { styleJson } from "./style_json.js";

async function makeStyledJson() {
  const userTweetsJson = await getTweets().then((data) => {
    return styleJson(data);
  });

  return console.log(userTweetsJson);
}

makeStyledJson();
