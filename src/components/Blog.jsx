import { Link } from 'react-router-dom'

export const Blog = (props) => {
    let blogDatum = props.blogData.map((e, id) => {
        return (
            <Link 
                to={`/blog/${e._id}`}
                className="nav-link">
                <div className="wrap">
                    <h5>{e.name}</h5>
                    <p className="preview-text">{e.content}</p>
                </div>
            </Link>
        )
    })
    return (
        <div className="container pt-3">
            <h1>Blog</h1>
            <div className="wrapper pt-3 row">
                {blogDatum}
                <Link
                    to={'/newpost'}
                    className="nav-link">
                    <div className="wrap new-box">
                        <h2>New Post</h2>
                    </div>
                </Link>
            </div>
        </div>
    )
}