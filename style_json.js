function styleJson(data) {
  const elements = [];
  for (let i = 0; i < 100; i++) {
    const element = data["data"][i];
    elements[i] = {
      "index": `${i}`,
      "created_at": `${element.created_at}`,
      "text": `${element.text}`,
      "like_count": `${element.public_metrics.like_count}`,
      "retweet_count": `${element.public_metrics.retweet_count}`,
      "reply_count": `${element.public_metrics.reply_count}`,
      "quote_count": `${element.public_metrics.quote_count}`,
    };
  }
  return JSON.stringify(elements,null,2);
}

export { styleJson };
