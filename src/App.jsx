import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Blog } from './components/Blog'
import { BlogPost } from './components/BlogPost'

import axios from 'axios'

export const App = () => {
    useEffect(() => {
        axios.get("http://localhost:4000/blog")
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
    })

    return (
        <BrowserRouter>
                <Route
                    exact path="/blog"
                    component={Blog}
                />
                <Route
                    path="/blog/:id"
                    component={BlogPost}
                />
        </BrowserRouter>
    )
}
