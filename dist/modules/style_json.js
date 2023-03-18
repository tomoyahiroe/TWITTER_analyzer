"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStyledJson = void 0;
function createStyledJson(tweets) {
    const styledJson = [];
    const length = Math.min(tweets?.data?.length || 0, 100);
    if (length === 0)
        return styledJson;
    for (let i = 0; i < length; i++) {
        if (tweets == null)
            throw new Error("Error: the variable 'tweets' is null or undefined");
        const tweetData = tweets.data[i];
        styledJson[i] = {
            index: i,
            created_at: tweetData.created_at || "",
            text: tweetData.text || "",
            like_count: tweetData.public_metrics?.like_count || 0,
            retweet_count: tweetData.public_metrics?.retweet_count || 0,
            reply_count: tweetData.public_metrics?.reply_count || 0,
            quote_count: tweetData.public_metrics?.quote_count || 0,
        };
    }
    return styledJson;
}
exports.createStyledJson = createStyledJson;
//# sourceMappingURL=style_json.js.map