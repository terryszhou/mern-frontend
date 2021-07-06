export const NewPost = () => {
    return (
        <div className="container pt-3">
            <h1>New Incredible True Post</h1>
            <div className="wrapper pt-3">
                <form id="new-form">
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" name="name"/>
                    </div>
                    <div className="form-group">
                        <label for="name">Author</label>
                        <input type="text" className="form-control" name="author"/>
                    </div>
                    <div className="form-group">
                        <label for="content">Content</label>
                        <textarea className="form-control" name="content"/>
                    </div>
                    <button className="btn btn-dark">Create</button>
                </form>
            </div>
        </div>
    )
}