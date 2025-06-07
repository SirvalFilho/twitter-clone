import {HomePageView} from '../views/HomePageView.js'

export class HomeController{

    loadHomeView(){
        const view = new HomePageView();
        document.getElementById('app').innerHTML = view.render();
        }
}