import { SignUpView} from "../views/SignUpView.js";
import { LogInView} from "../views/LogInView.js";
import { AuthRepository } from "../repositories/AuthRepository.js";
import { HomeController } from "./HomeController.js";
export class AuthController{
    static isAuthenticated(){
        return !!localStorage.getItem('token') ;
    }

    static logOut(){
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
    }

    loadSignUpView(){
    const view = new SignUpView(()=> this.loadLogInView());
    document.getElementById('app').innerHTML = view.render();
    view.afterRender();
    }

    loadLogInView(){
      const view = new LogInView(()=> this.loadSignUpView());
      document.getElementById('app').innerHTML = view.render();
      view.afterRender();
    }

    redirectToHome(){
        const homeController = new HomeController();
        homeController.loadHomeView();
    }

     async attachEventToSignUpForm(event){
        event.preventDefault();
        const form = event.target;

        let username = form['username'].value;
        let email = form['email'].value;
        let password = form['password'].value;
        let confirmPassword = form['confirm-password'].value;

        if(!username || !email || !password || !confirmPassword){
            alert('Todos os campos são obrigatórios.');
            return;
        }
        
        if(!this.isValidEmail(email)){
            alert('Entre com um email válido.');
            return;
        }

        if(password.length < 6){
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        if(password !== confirmPassword){
            alert('As senhas devem ser iguais.');
            return;
        }

        const user = {
            username : username,
            email : email,
            password : password
        };
        const authRepository = new AuthRepository();
       
        try{
            const data = await authRepository.register(user);
            this.persistUserData(data);
            this.redirectToHome();
        }catch(error){
            alert(error.message);
        }   
    }
 
      async attachEventToLogInForm(event){
        event.preventDefault();
        const form = event.target;

        let email = form['email'].value;
        let password = form['password'].value;

        if(!email || !password){
            alert('Todos os campos são obrigatórios.');
            return;
        }

         if(!this.isValidEmail(email)){
            alert('Entre com um email válido.');
            return;
        }

        if(password.length < 6){
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        const user = {
            email : email,
            password : password
        };
        const authRepository = new AuthRepository();
       
        try{
            const data = await authRepository.login(user);
            this.persistUserData(data);
            this.redirectToHome();
        }catch(error){
            alert(error.message);
        }   
     }

    isValidEmail(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
    }

    persistUserData(data) {
        if(!!data.token){
             localStorage.setItem('token', data.token);
        }

        if(!!data.user.username){
            localStorage.setItem('username', data.user.username);
        }

        if(!!data.user.email){
            localStorage.setItem('email', data.user.email);
        }
    }
}