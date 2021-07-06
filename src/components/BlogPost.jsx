import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export const BlogPost = (props) => {
    const [name, setName] = useState(props.name)
    const [author, setAuthor] = useState(props.author)
    const [content, setContent] = useState(props.content)

    const deletePost = (e) => {
        e.preventDefault()
        axios.delete(`http://localhost:4000/blog/${props._id}`, {
            name: name,
            author: author,
            content: content
        })
        .then(() => window.location = '/blog')
        .catch(err => console.log(err))
    }

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
                    <button onClick={deletePost} className="btn btn-dark">Delete Post</button>
                </Link>
            </div>
        </div>
    )
}