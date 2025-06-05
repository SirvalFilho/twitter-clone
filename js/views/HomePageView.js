export class HomePageView {
  render() {
    return `
    <div class="home-container">
        <header>
            <div class="header-left">
            <img src="./assets/home.png" alt="Home" />
            </div>
            <img src="./assets/twitter.png" alt="Logo" />
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
                <span class="card-name">Nome do Usuario</span>
                <span class="card-username">@Usuario</span>
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
            <div class="tweet-box">
                <input type="text" placeholder="What's happening?" />
                <button>Tweet</button>
            </div>
            <div class="home-tweets">
                <div class="tweet-card">
                <div class="tweet-content">
                    <div class="tweet-header">
                    <div class="tweet-avatar">
                        <img
                        src="./assets/profile-assets/profile-avatar.png"
                        alt=""
                        />
                    </div>
                    <div class="tweet-info">
                        <span class="tweet-name">Nome do Usuario</span>
                        <span class="tweet-username">@usuario</span>
                    </div>
                    </div>
                    <p>
                    Don't wait for the perfect moment. Make every moment the
                    perfect opportunity.
                    </p>
                    <div class="tweet-footer">
                    <div class="actions">
                        <button class="tweet-action-btn">
                        <img
                            src="./assets/profile-assets/curtir.png"
                            alt="Curtir"
                        />
                        </button>
                        <button class="tweet-action-btn">
                        <img
                            src="./assets/profile-assets/comentar.png"
                            alt="Comentar"
                        />
                        </button>
                        <button class="tweet-action-btn">
                        <img
                            src="./assets/profile-assets/retweetar.png"
                            alt="Retweetar"
                        />
                        </button>
                        <button class="tweet-action-btn">
                        <img
                            src="./assets/profile-assets/compartilhar.png"
                            alt="Compartilhar"
                        />
                        </button>
                    </div>
                    <span class="date">27/05/25 - 16:20</span>
                    </div>
                </div>
                </div>
                <div class="tweet-card">
                <div class="tweet-content">
                    <div class="tweet-header">
                    <div class="tweet-avatar">
                        <img
                        src="./assets/profile-assets/profile-avatar.png"
                        alt=""
                        />
                    </div>
                    <div class="tweet-info">
                        <span class="tweet-name">Nome do Usuario</span>
                        <span class="tweet-username">@usuario</span>
                    </div>
                    </div>
                    <p>
                    Don't wait for the perfect moment. Make every moment the
                    perfect opportunity.
                    </p>
                    <div class="tweet-footer">
                    <div class="actions">
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
                        <img
                            src="./assets/profile-assets/compartilhar.png"
                            alt=""
                        />
                        </button>
                    </div>
                    <span class="date">27/05/25 - 16:20</span>
                    </div>
                </div>
                </div>
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
