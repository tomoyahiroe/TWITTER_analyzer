import "dotenv/config.js"; //envファイルの記述
import { Tweet, Tweets } from "models/index.js"; //型の読み込み

// 関数群のインポート
import { getTweets } from "./modules/get_tweets.js";
import { createStyledJson } from "./modules/style_json.js";
import { jsonToCsv } from "./modules/json_to_csv.js";
import { writeFile } from "./modules/write_file.js";

async function createCsvFile() {
  try {
    if (!process.env.MY_TWITTER_ID) throw new Error("Error: NO USER ID");
    if (!process.env.TWITTER_BEARER_TOKEN)
      throw new Error("Error: NO BEARER TOKEN");

    // 引数の定義
    const userId = process.env.MY_TWITTER_ID;
    const token = process.env.TWITTER_BEARER_TOKEN;
    const max_result = 100;

    const tweets = await getTweets(userId, token, max_result);
    const styledJson = createStyledJson(tweets);
    const csv = jsonToCsv(styledJson);
    await writeFile(csv);
  } catch (err) {
    console.log(err);
  }
}

createCsvFile();
