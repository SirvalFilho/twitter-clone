export class HomePageView {

    constructor(onHomeClick){
        this.onHomeClick = onHomeClick;
    }

  render() {
    return `
    <div class="home-container">
            <header>
                <div class="header-left">
                <img src="./assets/images/home-icon.svg" alt="Home" />
                </div>
                <img src="./assets/images/home-logo.svg" alt="Logo" />
                <a href="" id="logout">Logout</a>
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
                <form class="tweet-box" id="tweet-form">
                     <input type="text" name="tweet" id="tweet" placeholder="What's happening?" />
                     <input type="submit" placeholder="Tweet">
                </form>
                <div class="home-tweets" id="tweets-list">
                </div>
                </section>
                <div class="widgets">
            <div class="who-to-follow">
                <span class="title">Who to follow.</span>
                <div class="sugested-user">
                <img src="./assets/profile-assets/profile-avatar.png" alt="" />
                <div class="info">
                    <span class="name">Joao Paulo</span>
                    <span class="username">@jp_021</span>
                </div>
                <button class="following">FOLLOWING</button>
                <button class="close">x</button>
                </div>
                <div class="sugested-user">
                <img src="./assets/profile-assets/profile-avatar.png" alt="" />
                <div class="info">
                    <span class="name">Jose Silva</span>
                    <span class="username">@silvajose</span>
                </div>
                <button>FOLLOW</button>
                <button class="close">x</button>
                </div>
            </div>
                <footer>© 2025 Mini-Twitter</footer>
                </div>
            </main>
        </div>
`;
  }
}
