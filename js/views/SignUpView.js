import {AuthController} from "../controllers/AuthController.js";

export class SignUpView {

    constructor(onLogInClick){
        this.onLogInClick = onLogInClick;
    }
    render(){
        return `
          <div class="auth-container">
            <div class="image-container">
                <img src="./assets/images/login-signup-background.svg" alt="twitter-background">
            </div>
            <div class="form-container">
                <img src="./assets/images/logo.svg" alt="twitter-logo">
                <h1>Sign up to Twitter</h1>
                <form id="sign-up-form">
                    <input type="username" placeholder="Username" id="username">
                    <input type="email" placeholder="Email " autocomplete="email" id="email">
                    <input type="password" placeholder="Password" id="password">
                    <input type="password" placeholder="Confirm password" id="confirm-password">
                    <input type="submit" value="Sign up">
                </form>
                <span>Have an account? <a id="redirect-to-log-in">Log In</a></span>
            </div>
        </div>
        `;
    }

    afterRender() {
    const signUpLink = document.getElementById("redirect-to-log-in");
    if (signUpLink) {
      signUpLink.addEventListener("click", (e) => {
        e.preventDefault();
        this.onLogInClick(); 
      });
    }
    const form = document.getElementById('sign-up-form');
    form.addEventListener('submit', async(e)=> {
        e.preventDefault();
        const controller = new AuthController();
        await controller.attachEventToSignUpForm(e);
    });
  }
}