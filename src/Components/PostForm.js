import React, { Component } from 'react';

class PostForm extends Component {
    state = {
        title: "",
        body: "",
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state.title, this.state.body);
        this.setState({
            title: "",
            body: ""
        })
    }

    render() {
        return (
            <div className="col-sm-4">
                <h2>Form</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="fName">Title:</label>
                        <input type="text" className="form-control" id="fName" name="title" placeholder="title" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lName">Body:</label>
                        <input type="text" className="form-control" id="lName" name="body" placeholder="body" onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm;
