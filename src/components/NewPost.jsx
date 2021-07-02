export const NewPost = () => {
    return (
        <div className="container pt-3">
            <h1>New Blog Post</h1>
            <div className="wrapper pt-3">
                <form id="new-form">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" name="name"/>
                    </div>
                    <div class="form-group">
                        <label for="name">Author</label>
                        <input type="text" class="form-control" name="author"/>
                    </div>
                    <div class="form-group">
                        <label for="content">Content</label>
                        <textarea class="form-control" name="content"/>
                    </div>
                </form>
            </div>
        </div>
    )
}