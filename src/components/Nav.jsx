export const Nav = () => {
    return (
        <div className="container">
            <nav className="justify-content-center navbar navbar-expand navbar-dark bg-dark fixed-bottom">
                <div className="navbar-nav">
                    <div className="nav-item">
                        <a href="/blog" className="nav-link">
                            Home
                        </a>
                    </div>
                    <div className="nav-item">
                        <a href="/newpost" className="nav-link">
                            New Post
                        </a>
                    </div>
                    <div className="nav-item">
                        <a href="https://github.com/terryszhou/mern-frontend" target="_blank" rel="noreferrer" className="nav-link">
                            <div className="icon fab fa-github"></div>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}