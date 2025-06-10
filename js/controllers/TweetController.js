import { TweetRepository } from "../repositories/TweetRepository.js";
import { TweetView } from "../views/TweetView.js";
import { TweetProfileView } from "../views/TweetProfileView.js";

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

    async loadUserTweets(){
         const tweetRepository = new TweetRepository();
        const tweets = await tweetRepository.loadUserTweets();
        const tweetsContainer = document.getElementById('tweets-list');
        tweetsContainer.innerHTML = '';

         await tweets.forEach(tweet => {
            tweetsContainer.innerHTML += new TweetProfileView(tweet).render();
        })

        const deleteButtons = document.querySelectorAll('.delete-tweet');
        deleteButtons.forEach(button => button.addEventListener('click',async (e) => {
            await this.deleteTweet(button.getAttribute('data-id')),
            await this.loadUserTweets()
        }));
            
    }

    async postNewTweet(newPost){
        let newTweet = {
            "content" : newPost }
        const tweetRepository = new TweetRepository();
        await tweetRepository.postNewTweet(newTweet);
    }

    async deleteTweet(id){
        const tweetRepository = new TweetRepository();
        const confirm = window.confirm('Deseja deletar esse tweet?');
        if(!confirm) return;
        await tweetRepository.deleteTweet(id);
    }
}