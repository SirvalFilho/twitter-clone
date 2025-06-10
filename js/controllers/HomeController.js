import {HomePageView} from '../views/HomePageView.js'
import { ProfileView } from '../views/ProfileView.js';
import { AuthController } from './AuthController.js';
import { TweetController } from './TweetController.js';
import { UpdateProfileView } from '../views/UpdateProfileView.js';

export class HomeController{

    loadHomeView(){
        const view = new HomePageView();
        const tweets = new TweetController();

        document.getElementById('app').innerHTML = view.render();
        tweets.loadAllTweets();
        document.getElementById('logout')
        .addEventListener('click', ()=> AuthController.logOut());

       document.getElementById('tweet-form')
       .addEventListener('submit',async (e) =>{
        e.preventDefault(),
        await this.attachValidationToNewPostForm(e),
        e.target.tweet.value = ''
        });


        document.getElementById('home')
        .addEventListener('click', () => {
            this.loadUserProfile();
        });
    }

     async attachValidationToNewPostForm(event){
        event.preventDefault();
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

    loadUserProfile(){
        const view = new ProfileView();
        const tweets = new TweetController();

        document.getElementById('app').innerHTML = view.render();
        tweets.loadUserTweets();
        view.afterRender();

        document.getElementById('edit-profile')
        .addEventListener('click', () => {
            this.loadUpdateProfileView();
        });
    }

    loadUpdateProfileView(){
        const updateView = new UpdateProfileView();

        document.getElementById('app').innerHTML = updateView.render();
        document.querySelector('.update-profile-back-button')
        .addEventListener('click', () => {
            this.loadUserProfile();
        })
        document.getElementById('update-profile-form')
        .addEventListener('submit', (e) => {
            e.preventDefault();
            const controller = new AuthController();
            controller.attachEventToUpdateProfileForm(e);
        })
    }
}