import { AuthController } from './../controllers/AuthController.js';
export class TweetRepository {


     async getAllTweets() {
        try{
            const response = await fetch('https://mini-twitter-api-vy9q.onrender.com/api/posts', {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json',
                     'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            if(response.status === 401){
                AuthController.logOut();
            }

            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || 'Ocorreu um erro ao buscar os tweets.');
            }

            const data = await response.json();
            return data;
        }catch(error){
            throw error;
        }
    }

    async loadUserTweets(){
            try{
                const response = await fetch('https://mini-twitter-api-vy9q.onrender.com/api/posts/my-posts', {
                    method: 'GET', 
                    headers: {
                        'Content-Type': 'application/json',
                         'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });

                if(response.status === 401){
                    AuthController.logOut();
                }

                if(!response.ok){
                    const error = await response.json();
                    throw new Error(error.message || 'Ocorreu um erro ao buscar os tweets.');
                }

                const data = await response.json();
                return data;
            }catch(error){
                throw error;
            }
    }

    async postNewTweet(newPost){
            try{
                const response = await fetch('https://mini-twitter-api-vy9q.onrender.com/api/posts', {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json',
                         'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify(newPost)
                });

                if(response.status === 401){
                    alert('Sua sessão expirou, efetue o login novamente.');
                    AuthController.logOut();
                }

                if(!response.ok){
                    const error = await response.json();
                    throw new Error(error.message || 'Ocorreu um erro ao postar o tweet.');
                }

                alert('Tweet postado com sucesso!');
                return;
            }catch(error){
                throw error;
            }
    }

    async deleteTweet(id){
        try{
            const response = await fetch(`https://mini-twitter-api-vy9q.onrender.com/api/posts/${id}`, {
                method: 'DELETE', 
                headers: {
                    'Content-Type': 'application/json',
                     'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }); 

            if(response.status === 401){
                alert('Sua sessão expirou, efetue o login novamente.');
                AuthController.logOut();
            }

            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || 'Ocorreu um erro ao deletar o tweet.');
            }

            alert('Tweet deletado com sucesso!');
            return;
        }catch(error){
            throw error;
        }
    }
}