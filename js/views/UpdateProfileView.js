export class UpdateProfileView{
    render(){
        return `
        <div class="update-profile-container">
            <div class="update-profile-back-button">
                <img src="./assets/profile-assets/back-profile.svg" alt="back-profile">
            </div>
            <div class="form-container">
                <img src="./assets/images/logo.svg" alt="twitter-logo">
                <h1>Update your profile</h1>
                <form id="update-profile-form">
                    <input type="username" placeholder="${localStorage.getItem('username')}" id="username">
                    <input type="email" placeholder="${localStorage.getItem('email')}" " autocomplete="email" id="email">
                    <input type="submit" value="Update Profile">
                </form>
            </div>
        </div>
        `;
    }
}