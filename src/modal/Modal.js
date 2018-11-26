import React, { Component } from "react";

class Modal extends Component {
  state = {
    display: "none"
  };
  OpenModal = () => {
    this.setState({ display: "block" });
  };
  CloseModal = () => {
    this.setState({ display: "none" });
  };
  componentDidMount() {
    window.addEventListener("click", this.closeModal_);
  }
  closeModal_ = e => {
    //console.log(e);
    //when use single modal
    var myModal = document.querySelector(".modal");
    if (e.target === myModal) {
      this.setState({ display: "none" });
    }
    //when using multiple modal
    // var myModal = document.querySelectorAll(".modal");
    // myModal.forEach(mod => {
    //   if (e.target === mod) {
    //     this.setState({ display: "none" });
    //   }
    // });
  };
  render() {
    return (
      <div>
        <button onClick={this.OpenModal}>Open Modal</button>
        <div
          className="modal"
          style={{ display: `${this.state.display}` }}
          onClick={this.closeModal_}
        >
          <div className="modal-content">
            <span className="close" onClick={this.CloseModal}>
              &times;
            </span>
            <p>Some text in the Modal..</p>
          </div>
        </div>
      </div>
    );
  }
  componentWillUnmount() {
    window.removeEventListener("click", this.closeModal_);
  }
}

export default Modal;
