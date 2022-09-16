function styleJson(data) {
  const elements = [];
  let loopLength = data.data.length
  if(data.data.length >= 100) loopLength = 100
  for (let i = 0; i < data.data.length; i++) {
    const element = data.data[i];
    elements[i] = {
      index: i,
      created_at: element.created_at,
      text: element.text,
      like_count: element.public_metrics.like_count,
      retweet_count: element.public_metrics.retweet_count,
      reply_count: element.public_metrics.reply_count,
      quote_count: element.public_metrics.quote_count,
    };
    elements[0] = element
  }
  return JSON.stringify(elements)
}

export { styleJson };
