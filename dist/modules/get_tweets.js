"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTweets = void 0;
const twitter_api_sdk_1 = require("twitter-api-sdk");
async function getTweets(userId, token, maxResults) {
    const client = new twitter_api_sdk_1.Client(token);
    const { data, errors } = await client.tweets.usersIdTweets(userId, {
        max_results: maxResults,
        "tweet.fields": ["created_at", "public_metrics"],
    });
    if (errors)
        throw new Error(`Error: ${errors[0].title}`);
    if (!data)
        throw new Error("Error: NO RESPONSE");
    return { data };
}
exports.getTweets = getTweets;
//# sourceMappingURL=get_tweets.js.map