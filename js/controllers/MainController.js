import { AuthController } from "./AuthController.js";
export class MainController{


    init(){
        if(!AuthController.isAuthenticated()){
                this.redirectToSignUpView();
    }
}
    redirectToSignUpView(){
        const authController = new AuthController();
        authController.loadSignUpView();
    }

    redirectToLogInView(){
       const authController = new AuthController();
        authController.loadLogInView();
    }

 
}
