import axios from "axios";

 const BaseURL ="https://www.googleapis.com/books/v1/volumes?q=";
 const APIKEY = "&AIzaSyABlIBQzFCY6EmhfcxaJ32V65UGIe2qHBQ&limit=10";

export default {
  // Get book from google search 
  search: function(query) {
      return axios.get(BaseURL + query + APIKEY)
  },

  // Gets all books
  getBooks: function () {
      return axios.get("/api/books");
  },

  // Gets the book with the given id
  getBook: function (id) {
      return axios.get("/api/books/" + id);
  },

  // Saves a book to the database
  saveBook: function (savedBooks) {
      return axios.post("/api/books", savedBooks);
  },

  // Deletes the book with the given id
  deleteBook: function (id) {
      return axios.delete("/api/books/" + id);
  }

}