import React from 'react'

const Form = () => {
    return (
        <form>
            <div className="form-group">
                <label htmlfor="name">Book Name:</label>
                <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group">
                <label htmlfor="name">Author:</label>
                <input type="text" className="form-control" id="author" />
            </div>
            <button type="submit" className="btn btn-primary">Add Book</button>
        </form>
    )
}

export default Form
