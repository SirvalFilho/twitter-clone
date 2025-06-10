export class TweetProfileView{
   
    constructor(tweet){
        this.tweet = tweet;
    }
    render(){
        return `
        <div class="tweet-card">
        <div class="tweet-content">
            <div class="tweet-header">
                <div class="tweet-avatar">
                    <img src="./assets/profile-assets/profile-avatar.png" alt="" />
                </div>
                <div class="tweet-header-info">
                    <span class="tweet-name">${this.tweet.author.username}</span>
                    <span class="tweet-username">@${this.tweet.author.username.toLowerCase()}</span>
                </div>
            </div>
            <p class="tweet-text"> ${this.tweet.content}</p>
            <div class="tweet-footer">
                <div class="tweet-actions">
        
                    <button class="tweet-action-btn">
                         <img src="./assets/profile-assets/curtir.png" alt="" />
                    </button>
                    <button class="tweet-action-btn">
                        <img src="./assets/profile-assets/comentar.png" alt="" />
                    </button>
                    <button class="tweet-action-btn">
                        <img src="./assets/profile-assets/retweetar.png" alt="" />
                    </button>
                    <button class="tweet-action-btn">
                         <img src="./assets/profile-assets/compartilhar.png" alt="" />
                    </button>
                   <button class="tweet-action-btn delete-tweet"  data-id="${this.tweet._id}">
                         <img src="./assets/profile-assets/lixeira.png" alt="" />
                    </button>
                </div>
                <span class="tweet-date">${this.formattDate(this.tweet.createdAt)}</span>
            </div>
        </div>
    </div>
        `;
    }

    formattDate(dateIso){
        const date = new Date(dateIso);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const year = String(date.getFullYear()).slice(-2); 
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${day}/${month}/${year} - ${hours}:${minutes}`;
    }
}