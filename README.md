# [HallooGPT](https://halloo-gpt.vercel.app)

This project generates quirky personalized Twitter greetings using AI.

[![HalloGPT-image](./public/screenshot.png)](https://halloo-gpt.vercel.app)

## How it works

This project uses the [ChatGPT API](https://openai.com/api/) and [Vercel Edge functions](https://vercel.com/features/edge-functions) with streaming. It queries a Twitter users recent tweets and then, based on the form and user input, sends the data to the chatGPT API via a Vercel Edge function and streams a custom personalized tweet greeting back to the application.

Thanks to @nutlope and his [twitterbio](https://github.com/Nutlope/twitterbio) project for the inspiration and the code for the Twitter API connection.

## Running Locally

After cloning the repo, go to [OpenAI](https://beta.openai.com/account/api-keys) to make an account and put your API key in a `.env` file.

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```zsh
yarn run dev
```
