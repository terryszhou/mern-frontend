export const BlogPost = (props) => {
    return (
        <div className="container pt-3">
            <h1>{props.name}</h1>
            <div className="wrapper pt-3">
                <p className="content-text">{props.content}</p>
            </div>
        </div>
    )
}