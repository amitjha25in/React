import React, { Component } from 'react';

class Form extends Component {
    state = {
        fName: "First Name",
        lName: "Last Name",
        email: "Email",
        comment: "Write Comment"
    }
    render() {
        return (
            <div className="container" >
                <h2>Form</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="fName">First Name:</label>
                        <input type="text" className="form-control" id="fName" name="fName" placeholder={this.state.fName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lName">Last Name:</label>
                        <input type="text" className="form-control" id="lName" name="lName" placeholder={this.state.lName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder={this.state.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment">Comment:</label>
                        <textarea className="form-control" rows="3" id="comment" placeholder={this.state.comment}></textarea>
                    </div>
                    <div className="form-group">
                        <h6>checkbox</h6>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" value="" />Option 1
                        </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" value="" />Option 2
                        </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <h6>radio</h6>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optradio" />Option 1
                        </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optradio" />Option 2
                        </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="sel1">Select list:</label>
                        <select className="form-control" id="sel1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        <label htmlFor="sel2">Mutiple select list:</label>
                        <select multiple className="form-control" id="sel2" name="sellist2">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;
