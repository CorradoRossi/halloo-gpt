import Twitter from "twitter";

// Set up Twitter API client with your credentials
export const client = new Twitter({
  consumer_key: process.env.consumer_key?.toString(),
  consumer_secret: process.env.consumer_secret?.toString(),
  access_token_key: process.env.access_token_key?.toString(),
  access_token_secret: process.env.access_token_secret?.toString(),
});

export async function scrapeTweets(username) {
  const params = {
    screen_name: username,
    count: 50,
  };
  // Make a request to the Twitter API to get the latest tweets of the user
  const response = await client.get("statuses/user_timeline", params);
  // Extract the text content of the tweets
  const tweets = response.map((tweet) => tweet.text);
  return tweets;
}
