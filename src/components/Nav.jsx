export const Nav = () => {
    return (
        <div className="container">
            <nav className="justify-content-center navbar navbar-expand navbar-dark bg-dark fixed-bottom">
                <div class="navbar-nav">
                    <div class="nav-item">
                        <a href="/blog" class="nav-link">
                            Home
                        </a>
                    </div>
                    <div class="nav-item">
                        <a href="/newpost" class="nav-link">
                            New Post
                        </a>
                    </div>
                    <div class="nav-item">
                        <a href="https://github.com/terryszhou/mern-frontend" target="_blank" rel="noreferrer" class="nav-link">
                            <div class="icon fab fa-github"></div>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}