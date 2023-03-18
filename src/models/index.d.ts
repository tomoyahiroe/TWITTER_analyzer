interface Tweet {
  public_metrics: {
    retweet_count: number;
    reply_count: number;
    like_count: number;
    quote_count: number;
  };
  id: string;
  text: string;
  created_at: string;
}
interface Tweets {
  data: Tweet[];
  meta: {
    result_count: number;
    newest_id: string;
    oldest_id: string;
    next_token: string;
  };
}

export { Tweet, Tweets };
