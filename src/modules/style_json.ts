import { Tweets, StyledJson } from "models";

function createStyledJson(tweets: Tweets): StyledJson {
  const styledJson = [];
  let length = tweets.data.length;
  if (length >= 100) length = 100;
  for (let i = 0; i < length; i++) {
    const tweetData = tweets.data[i];
    styledJson[i] = {
      index: i,
      created_at: tweetData.created_at,
      text: tweetData.text,
      like_count: tweetData.public_metrics.like_count,
      retweet_count: tweetData.public_metrics.retweet_count,
      reply_count: tweetData.public_metrics.reply_count,
      quote_count: tweetData.public_metrics.quote_count,
    };
  }
  return styledJson;
}

export { createStyledJson };
