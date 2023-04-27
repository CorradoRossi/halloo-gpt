import { VibeType } from "../components/DropDown";

export async function primaryPrompt(
  handle: string,
  vibe: VibeType,
  contact: string,
  userData: string[]
) {
  return `I am going to show you a collection of recent tweets written by ${handle}. I want you to use the information from these tweets to craft a personalized greeting for them from the sender. Make sure the greeting has a ${vibe} vibe and ${vibe} tone. Make sure it is in the form of a ${contact}. Keep the greeting to roughly 240 characters. Do not use hashtags. Here are the tweets to base your message on: ${userData}`;
}

export const sentimentPrompt = (handle: string, userData: string[]) => {
  return `I am going to provide you with a collection of 100 tweets by ${handle}. I want you to assess the entire collection and identify any obvious patterns in sentiment. You can use a scale of 1 to 10, where 1 is very negative and 10 is very positive. Provide one number that reasonably conveys the sentiment of the individual who wrote the tweets based on their overall tone and tenor. Don't forget to explain your reasoning. Here are the tweets in question: ${userData}`;
};
