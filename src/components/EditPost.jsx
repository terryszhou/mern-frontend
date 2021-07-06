import { useState } from 'react'
import axios from 'axios'

export const EditPost = (props) => {
    const [name, setName] = useState("")
    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")

    const saveEdit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:4000/blog/${props._id}`, {
            name: name,
            author: author,
            content: content
        })
        .then(() => window.location = '/blog')
        .catch(err => console.log(err))
    }

    return (
        <div className="container pt-3">
            <h1>Edit Blog Post</h1>
            <div className="wrapper pt-3">
                <form id="edit-form" onSubmit={saveEdit}>
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
                    <div className="form-group">
                        <input type="submit" value="Save Edits" className="btn btn-dark"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

// SCRAP CODE
// useEffect(() => {
//     const editPost = (e) => {
//         e.preventDefault()

//         const editObject = {
//             name: name,
//             author: author,
//             content: content
//         }

//         axios.put(`http://localhost:4000/blog`, editObject)
//             .then(res => console.log(res.data))
//             .catch(err => console.log(err))
//     }
// })