export class AuthRepository {

   async register(user){
    try{
         const response = await fetch('https://mini-twitter-api-vy9q.onrender.com/api/auth/register', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
        
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || 'Ocorreu um erro ao registrar o usuário.');
            }

            const data = await response.json();
            return data;
    }catch(error){
    }
       
    }

    async login(user){
        try{
            const response = await fetch('https://mini-twitter-api-vy9q.onrender.com/api/auth/login', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || 'Ocorreu um erro ao efetuar login o usuário.');
            }

            const data = await response.json();
            return data;

        }catch(error){
        }      
    }
     
}