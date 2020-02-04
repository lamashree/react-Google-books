import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
  // Initialize this.state.books as an empty array
  state = {
    books: []
  };

  // Add code here to get all books from the database and save them to this.state.books

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md">
            <form> Saved books
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
