import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API"

class Books extends Component {
  state = {
    search: "",
    books: []
  };
  componentDidMount() {
    this.searchBook("books");
  }
  searchBook = query => {
    console.log("this is working")
    API.search(query)
      .then(res => this.setState({ books: res.data.items }))
      .catch(err =>
        console.log(err));
  }
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  handleSearch = event => {
    event.preventDefault();
    this.searchBook(this.state.search);
  };
  render() {
    console.log(this.state.books);

    return (

      <Container fluid>
        <Row>
          <Col size="md">
            <div>
              <TextArea
                search={this.state.search}
                search={this.state.search}
                onClick={this.handleSearch} handleInputChange={this.handleInputChange}
              />
              <button type="submit" onClick={this.state.handleSearch} className="btn btn-success">
                Search for Books
        </button>


            </div> 
            {/* <div books={this.state.books}>

           
              {this.books.map( book => (
                <li key={book.id}>
                </li>,
                <li>{this.state.book[0]}</li>
              ))}
              </div> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
