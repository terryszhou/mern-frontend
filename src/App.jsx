import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Blog } from './components/Blog'
import { BlogPost } from './components/BlogPost'
import { NewPost } from './components/NewPost'
import { Nav } from './components/Nav'

import axios from 'axios'

export const App = () => {
const [blogData, setBlogData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/blog")
        .then(res => {
            setBlogData(res.data)
            console.log(blogData)
        })
        .catch(err => console.log(err))
    },[blogData])

    return (
        <BrowserRouter>
                <Route
                    exact path="/blog"
                    render={() => <Blog blogData={blogData}/>}
                />
                <Route
                    path="/blog/:id"
                    render={props => {
                        const blogPost = blogData.find(e => e._id.toString() === props.match.params.id)
                        props = {...props, ...blogPost}
                        return <BlogPost {...props}/>
                    }}
                />
                <Route
                    path="/newpost"
                    component={NewPost}
                />
                <Nav />
        </BrowserRouter>
    )
}
