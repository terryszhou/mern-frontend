import { useState } from 'react'
import axios from 'axios'

export const NewPost = (props) => {
    const [name, setName] = useState("")
    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")

    const createPost = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:4000/blog`, {
            name: name,
            author: author,
            content: content
        })
        .then(() => window.location = '/blog')
        .catch(err => console.log(err))
    }

    return (
        <div className="container pt-3">
            <h1>New Incredible True Post</h1>
            <div className="wrapper pt-3">
                <form id="new-form" onSubmit={createPost}>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder={props.name}/>
                    </div>
                    <div className="form-group">
                        <label for="name">Author</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={author}
                            onChange={e => setAuthor(e.target.value)}
                            placeholder={props.author}/>
                    </div>
                    <div className="form-group">
                        <label for="content">Content</label>
                        <textarea 
                            className="form-control" 
                            value={content}
                            onChange={e => setContent(e.target.value)}
                            placeholder={props.content}/>
                    </div>
                    <button className="btn btn-dark">Create</button>
                </form>
            </div>
        </div>
    )
}