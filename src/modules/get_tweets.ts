import { Tweets } from "models";
import { Client } from "twitter-api-sdk";

async function getTweets(
  userId: string,
  token: string,
  maxResults: number
): Promise<Tweets> {
  const client = new Client(token);
  const { data, errors } = await client.tweets.usersIdTweets(userId, {
    max_results: maxResults,
    "tweet.fields": ["created_at", "public_metrics"],
  });
  if (errors) throw new Error(`Error: ${errors[0].title}`);
  if (!data) throw new Error("Error: NO RESPONSE");

  return { data };
}

export { getTweets };
