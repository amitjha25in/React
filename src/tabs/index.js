import React, { Component } from "react";
//import $ from "jquery";

// class Tab extends Component {
//   state = {
//     display: "none"
//   };
//   componentDidMount() {
//     //window.addEventListener("click", this.closeModal_);
//     $(".tab-link").click(function() {
//       var tabData = $(this).attr("data-tab");
//       $(".tab-link").removeClass("current");
//       $(".tab-content").removeClass("current");
//       $(this).addClass("current");
//       $("#" + tabData).addClass("current");
//     });
//   }
//   render() {
//     return (
//       <div className="container">
//         <ul className="tabs">
//           <li className="tab-link current" data-tab="tab-1">
//             Tab One
//           </li>
//           <li className="tab-link" data-tab="tab-2">
//             Tab Two
//           </li>
//           <li className="tab-link" data-tab="tab-3">
//             Tab Three
//           </li>
//           <li className="tab-link" data-tab="tab-4">
//             Tab Four
//           </li>
//         </ul>

//         <div id="tab-1" className="tab-content current">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat.
//         </div>
//         <div id="tab-2" className="tab-content">
//           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
//           dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
//           proident, sunt in culpa qui officia deserunt mollit anim id est
//           laborum.
//         </div>
//         <div id="tab-3" className="tab-content">
//           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
//           nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur.
//         </div>
//         <div id="tab-4" className="tab-content">
//           Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//           enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
//           ut aliquip ex ea commodo consequat.
//         </div>
//       </div>
//     );
//   }
// }

class Tab extends Component {
  state = {
    vaues: "0"
  };

  handleChange = e => {
    const vaues = e.target.value;
    console.log(vaues);
    this.setState({ vaues });
  };

  render() {
    const { vaues } = this.state;
    return (
      <div>
        <ul>
          <button onClick={this.handleChange} value={0}>
            Tab 1
          </button>
          <button onClick={this.handleChange} value={1}>
            Tab 2
          </button>
          <button onClick={this.handleChange} value={2}>
            Tab 3
          </button>
        </ul>
        <div className="tabData">
          {vaues === "0" && <div className="tab_1">Tab 1</div>}
          {vaues === "1" && <div className="tab_2">Tab 2</div>}
          {vaues === "2" && <div className="tab_3">Tab 3</div>}
        </div>
      </div>
    );
  }
}
export default Tab;
