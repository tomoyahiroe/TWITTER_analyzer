import { Client } from "twitter-api-sdk";
import "dotenv/config.js";

async function getTweets(userId: string, token: string, max_results: number) {
  const client = new Client(token);
  const response = await client.tweets.usersIdTweets(userId, {
    max_results: max_results,
    "tweet.fields": ["created_at", "public_metrics"],
  });
  return response;
}

export { getTweets };
