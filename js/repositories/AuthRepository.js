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

    async updateProfile(user){
        try{
            const response = await fetch('https://mini-twitter-api-vy9q.onrender.com/api/users/profile', {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(user)
            }); 

            if(response.status === 400){
                throw new Error('O email ou nome de usuário informado já está sendo utilizado por outro usuário.');
            }

            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || 'Ocorreu um erro ao atualizar o perfil.'); 
            }

            const data = await response.json();
            localStorage.setItem('username', data.user.username);
            localStorage.setItem('email', data.user.email);
            alert('Perfil atualizado com sucesso!');
            return data;
        }catch(error){ 
            throw error;
        }
    }
     
}