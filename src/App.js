import React from "react";
import Contact from "./contacts";

class App extends React.Component {
  state = {
    contacts: [],
    per: 12,
    page: 1,
    totalPages: null,
    scrolling: false,
    noMorePage: false
  };

  componentWillMount() {
    this.loadContacts();
    this.scrollListner = window.addEventListener("scroll", e => {
      this.handleScroll(e);
    });
  }

  handleScroll = e => {
    const { scrolling, totalPages, page } = this.state;
    if (scrolling) return;
    if (totalPages <= page) return this.setState({ noMorePage: true });
    const lastCard = document.querySelector(".contact__:last-child");
    const lastCardOffset = lastCard.offsetTop + lastCard.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    const bottomOffset = 10;
    if (pageOffset > lastCardOffset - bottomOffset) this.lodMore();
  };

  loadContacts = () => {
    const { per, page, contacts } = this.state;
    const url = `https://student-example-api.herokuapp.com/v1/contacts.json?per=${per}&page=${page}`;
    fetch(url)
      .then(response => response.json())
      .then(json =>
        this.setState({
          contacts: [...contacts, ...json.contacts],
          scrolling: false,
          totalPages: json.total_pages
        })
      );
  }; 

  lodMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        scrolling: true
      }),
      this.loadContacts
    );
  };

  render() {
    return (
      <div className="container my-5">
        <div className="row contacts">
          {this.state.contacts.map(contact => {
            return (
              <div
                className="col-sm-4 mb-3 contact__"
                key={`${contact.id} ${contact.name}`}
              >
                <Contact {...contact} />
              </div>
            );
          })}
          {/* <div className="btn btn-success" onClick={this.lodMore}>
            Load More
          </div> */}
        </div>
        <div className="row">
          <div className="col-12">
            <div class="bg-danger text-white text-center p-2">
              {this.state.noMorePage ? "There is no more page" : "Loading..."}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
