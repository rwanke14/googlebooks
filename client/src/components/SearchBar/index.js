import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import API from "./utils/getbook";

const SearchBar = () => {
  const [books, setBooks] = useState([]);
  const [saved, setSaved] = useState([
    title= "",
    author="",
    description="",
    image="",
    link=""

  ])

  const handleInputChange = (e) => {
    const books = e.target.value;
    setBooks(books.toLowerCase());
  };

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...saved, [name]: value})
      };
    
      // When the form is submitted, use the API.saveBook method to save the book data
      // Then reload books from the database
      function handleSaveBook(event) {
        event.preventDefault();
        
          API.saveBook({
            title: saved.title,
            author: saved.author,
            description: saved.description,
            image: saved.image,
            link: saved.link
          })
            .then(() => setSaved({
                title= "",
                author="",
                description="",
                image="",
                link=""
            }))
            .then(() => loadBooks())
            .catch(err => console.log(err));
        
      };
  

  return (
    <div>
      <Container>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={handleInputChange}>
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Container>

      <div>
        {books.length ? (
          <Container>
            {books.map((book) => (
              <Card style={{ width: "18rem" }}>
                <Link to={"/books/" + book._id}>
                  <Card.Img value="image" variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title value="title">{book.title}</Card.Title>
                    <Card.Text value="description">{book.description}</Card.Text>
                    <Button variant="primary" value="link">View - Link to Book</Button>
                    <Button
                      variant="primary"
                      onClick={handleSaveBook}
                    >
                      Save
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
    </div>
  );
};

export default SearchBar;
