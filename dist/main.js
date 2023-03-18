"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config.js"); //envファイルの記述
// 関数群のインポート
const get_tweets_js_1 = require("./modules/get_tweets.js");
const style_json_js_1 = require("./modules/style_json.js");
const json_to_csv_js_1 = require("./modules/json_to_csv.js");
const write_file_js_1 = require("./modules/write_file.js");
async function createCsvFile() {
    try {
        if (!process.env.MY_TWITTER_ID)
            throw new Error("Error: NO USER ID");
        if (!process.env.TWITTER_BEARER_TOKEN)
            throw new Error("Error: NO BEARER TOKEN");
        // 引数の定義
        const userId = process.env.MY_TWITTER_ID;
        const token = process.env.TWITTER_BEARER_TOKEN;
        const max_result = 100;
        const tweets = await (0, get_tweets_js_1.getTweets)(userId, token, max_result);
        const styledJson = (0, style_json_js_1.createStyledJson)(tweets);
        const csv = (0, json_to_csv_js_1.jsonToCsv)(styledJson);
        await (0, write_file_js_1.writeFile)(csv);
    }
    catch (err) {
        console.log(err);
    }
}
createCsvFile();
//# sourceMappingURL=main.js.map