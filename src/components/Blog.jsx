import { Link } from 'react-router-dom'

export const Blog = (props) => {
    let blogDatum = props.blogData.map((e, id) => {
        return (
            <Link 
                to={`/blog/${e._id}`}
                className="nav-link">
                <div className="wrap">
                    <h4>{e.name}</h4>
                </div>
            </Link>
        )
    })
    return (
        <div className="container pt-3">
            <h1>Welcome, Fool</h1>
            <div className="wrapper pt-3 row">
                {blogDatum}
                <Link
                    to={'/newpost'}
                    className="nav-link">
                    <div className="wrap new-box">
                        <h4>New Post</h4>
                    </div>
                </Link>
            </div>
        </div>
    )
}