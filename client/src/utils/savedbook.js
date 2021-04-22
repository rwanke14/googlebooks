import axios from "axios";

const baseURL = "http://localhost:3001";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get(`${baseURL}/api/books`);
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get(`${baseURL}/api/books` + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete(`${baseURL}/api/books` + id);
  },

};