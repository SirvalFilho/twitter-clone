import {HomePageView} from '../views/HomePageView.js'
import { AuthController } from './AuthController.js';
import { TweetController } from './TweetController.js';

export class HomeController{

    loadHomeView(){
        const view = new HomePageView();
        const tweets = new TweetController();

        document.getElementById('app').innerHTML = view.render();
        tweets.loadAllTweets();
        document.getElementById('logout')
        .addEventListener('click', ()=> AuthController.logOut());

       document.getElementById('tweet-form')
       .addEventListener('submit', (e) =>{
        e.preventDefault(),
        this.attachValidationToNewPostForm(e)});
    }

     async attachValidationToNewPostForm(event){
        const input = event.target.tweet.value;

        if(!input) return;

        if(input.length > 180){
            alert('O tweet deve ter no máximo 180 caracteres.');
            return;
        } 

        const confirmation = window.confirm('Deseja postar esse tweet? \n' + input);
        if(confirmation){
            const tweetController = new TweetController();
            await tweetController.postNewTweet(input);
            await tweetController.loadAllTweets();
            return;
        }
    }
}