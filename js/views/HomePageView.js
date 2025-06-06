export class HomePageView {
  render() {
    return `
    <div class="home-container">
            <header>
                <div class="header-left">
                <img src="./assets/images/home-icon.svg" alt="Home" />
                </div>
                <img src="./assets/images/home-logo.svg" alt="Logo" />
                <a href="">Logout</a>
            </header>
            <main>
                <div class="sidebar">
                <div class="user-card">
                    <div class="card-banner"></div>
                    <div class="card-avatar">
                    <img
                        src="./assets/profile-assets/profile-avatar.png"
                        alt="Avatar"
                    />
                    </div>
                    <div class="card-info">
                    <span class="card-name">${localStorage.getItem('username')}</span>
                    <span class="card-username">@${localStorage.getItem('username').toLocaleLowerCase()}</span>
                    </div>
                    <div class="card-stats">
                    <div class="stat-item">
                        <span class="label">Tweets</span>
                        <span class="value">7</span>
                    </div>
                    <div class="stat-item">
                        <span class="label">Following</span>
                        <span class="value">2</span>
                    </div>
                    <div class="stat-item">
                        <span class="label">Followers</span>
                        <span class="value">3</span>
                    </div>
                    </div>
                </div>
                </div>
                <section class="feed">
                <form class="tweet-box">
                     <input type="text" placeholder="What's happening?" />
                     <input type="submit" placeholder="Tweet">
                </form>
                <div class="home-tweets" id="tweets-list">
                </div>
                <footer>© 2025 Mini-Twitter</footer>
                </div>
            </main>
        </div>
`;
  }
}
