import React, {useState, useEffect} from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import API from "../../utils/savedbook";
import 'bootstrap/dist/css/bootstrap.min.css';

const SavedBook = () => {
  const [books, setBooks] = useState([]);

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks();
  }, []);

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  }

  return (
    <div>
      {books.length ? (
        <Container>
          {books.map((book) => (
            <Card style={{ width: "18rem" }} key={book._id}>
              <Link to={"/books/" + book._id}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.description}</Card.Text>
                  <Button variant="primary">View - Link to Book</Button>
                  <Button
                    variant="primary"
                    onClick={() => deleteBook(book._id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Link>
            </Card>
          ))}
        </Container>
      ) : (
        <h3>No Books to display</h3>
      )}
    </div>
  );
};

export default SavedBook;
