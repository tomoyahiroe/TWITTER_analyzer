import { Client } from "twitter-api-sdk";
import process from "node:process";

const userAccountId = process.env.MY_TWITTER_ID; // user account you wanna fetch its data

async function getTweets() {
  const client = new Client(process.env.TWITTER_BEARER_TOKEN);
  const response = await client.tweets.usersIdTweets(userAccountId, {
    max_results: 100,
    "tweet.fields": ["created_at", "public_metrics"],
  });
  return response;
}

export { getTweets };
