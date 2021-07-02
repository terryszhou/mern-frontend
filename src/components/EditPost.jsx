export const EditPost = (props) => {
    return (
        <div className="container pt-3">
            <h1>Edit Blog Post</h1>
            <div className="wrapper pt-3">
                <form id="edit-form">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" name="name" placeholder={props.name}/>
                    </div>
                    <div class="form-group">
                        <label for="name">Author</label>
                        <input type="text" class="form-control" name="author" placeholder={props.author}/>
                    </div>
                    <div class="form-group">
                        <label for="content">Content</label>
                        <textarea class="form-control" name="content" placeholder={props.content}/>
                    </div>
                    <button className="btn btn-dark">Edit</button>
                </form>
            </div>
        </div>
    )
}