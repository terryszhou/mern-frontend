import { Link } from 'react-router-dom'

export const BlogPost = (props) => {
    return (
        <div className="container pt-3">
            <h1>{props.name}</h1>
            <h3>By {props.author}</h3>
            <hr></hr>
            <div className="wrapper">
                <p className="content-text">{props.content}</p>
            </div>
            <hr></hr>
            <div className="wrapper">
                <Link
                    to={`/blog/${props._id}/edit`}>
                    <button className="btn btn-dark">Edit Post</button>
                </Link>
            </div>
        </div>
    )
}