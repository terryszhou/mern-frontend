import { Link } from 'react-router-dom'

export const Blog = (props) => {
    let blogDatum = props.blogData.map((e, id) => {
        return (
            <div>
                <Link to={`/blog/${e._id}`}>
                    {e.name}
                </Link>
            </div>
        )
    })
    return (
        <div>
            <h1>Blog</h1>
            {blogDatum}
        </div>
    )
}