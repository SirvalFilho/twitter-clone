import { AuthController } from "../controllers/AuthController.js";
export class LogInView{
    constructor(onSignUpClick){
        this.onSignUpClick = onSignUpClick;
    }
    render(){
        return `
            <div class="auth-container">
                <div class="image-container">
                    <img src="./assets/images/login-signup-background.svg" alt="twitter-background">
                </div>
                <div class="form-container">
                    <img src="./assets/images/logo.svg" alt="twitter-logo">
                    <h1>Log In To Twitter</h1>
                <form id="log-in-form">
                    <input type="email" placeholder="Email " autocomplete="email" id="email">
                    <input type="password" placeholder="Password" id="password">
                    <input type="submit" value="Log In">
                </form>
                    <span>Don't have an account? <a id="redirect-to-sign-up">Sign Up</a></span>
                </div>
            </div>`;
    }

   afterRender(){
     const signUpLink = document.getElementById("redirect-to-sign-up");
        if (signUpLink) {
          signUpLink.addEventListener("click", (e) => {
            e.preventDefault();
            this.onSignUpClick(); 
          });
        }
        const form = document.getElementById('log-in-form');
        form.addEventListener('submit', async(e)=> {
            e.preventDefault();
            const controller = new AuthController();
            await controller.attachEventToLogInForm(e);
        });
      }
   }
