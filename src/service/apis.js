import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

export const likeTweet = async (tweetId) => {
    return await axios.post(`${baseURL}/likeTweet/${tweetId}`, {tweetId});
}

export const repostTweet = async (tweetId) => {
    return await axios.post(`${baseURL}/repostTweet/${tweetId}`, {tweetId});
}

export const getTweets = async () => {
    return (await axios.get(`tweets.json`)).data;
}