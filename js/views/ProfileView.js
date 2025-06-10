import { HomeController } from "../controllers/HomeController.js";


export class ProfileView{

    constructor(){
    }
    render(){
        return `
        <div class="profile-container">
        <div class="profile-content">
        <div class="profile-header">
            <button id="back-button">
                <img src="./assets/profile-assets/back-profile.svg" alt="" />
            </button>
        </div>
        <div class="profile-banner-content">
            <div class="profile-banner"></div>
            <div class="profile-avatar">
                    <div class="profile-avatar-img">
                         <img src="./assets/profile-assets/profile-avatar.png" alt="" />
                    </div>
            </div>
        </div>
        <div class="profile-info">
            <h1>${localStorage.getItem('username')}</h1>
            <p class="profile-username">@${localStorage.getItem('username').toLowerCase()}</p>
            <p class="profile-bio">Your Twitter Bio</p>
            <div class="profile-follow">
                <div class="profile-follow-item">
                    <span class="profile-follow-count">2</span>
                    <span class="profile-follow-label">Following</span>
                </div>
                <div class="profile-follow-item">
                    <span class="profile-follow-count">3</span>
                    <span class="profile-follow-label">Followers</span>
                </div>
            </div>
            <div class="profile-edit-btn">
                <button id="edit-profile">Edit Profile</button>
            </div>
            </div>
            <div class="twitte-container">
            <div class="profile-tab">
                <button class="profile-tab-btn">Tweets</button>
            </div>
            <div class="profile-tweets" id="tweets-list">
            </div>
        </div>
    </div>
</div>
</div>
</div>
        
`;
}

afterRender(){
const backButton = document.getElementById("back-button");
backButton.addEventListener("click", (e) => {
    e.preventDefault();
    const homeController = new HomeController();
    homeController.loadHomeView(); 
  });
}
}