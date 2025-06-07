import { AuthController } from "./AuthController.js";
import { HomeController } from "./HomeController.js";
export class MainController{

    constructor(){
         if(this.checkIfUserIsLogIn()){
            this.redirectToHomePageView();
         }
    }


    redirectToHomePageView(){
        const homeController = new HomeController();
        homeController.loadHomeView();
    }

    redirectToSignUpView(){
        const authController = new AuthController();
        authController.loadSignUpView();
        
    }

    redirectToLogInView(){
       const authController = new AuthController();
        authController.loadLogInView();
    }

    checkIfUserIsLogIn(){
        if(!AuthController.isAuthenticated()){
                this.redirectToSignUpView();
                return false;
    }
    return true;

    }
}
