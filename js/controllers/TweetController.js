import { TweetRepository } from "../repositories/TweetRepository.js";
import { TweetView } from "../views/TweetView.js";

export class TweetController{

     async loadAllTweets(){
        const tweetRepository = new TweetRepository();
        const tweets = await tweetRepository.getAllTweets();
        const tweetsContainer = document.getElementById('tweets-list');
        tweetsContainer.innerHTML = '';

        tweets.forEach(tweet => {
            tweetsContainer.innerHTML += new TweetView(tweet).render();
        })
    }

    async postNewTweet(newPost){
        let newTweet = {
            "content" : newPost }
        const tweetRepository = new TweetRepository();
        await tweetRepository.postNewTweet(newTweet);
    }
}