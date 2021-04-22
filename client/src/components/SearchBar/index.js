import React, {useState, useEffect} from "react";
import { InputGroup, FormControl, Button, Container, Card } from "react-bootstrap";
import API from "../../utils/getbook";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = () => {

  const [books, setBooks] = useState([]);
  const [saved, setSaved] = useState({
    title: "",
    author: "",
    description: "",
    image: "",
    link: ""

  })
  const [google, setGoogleResults] = useState([])
  
  useEffect(() => {
    loadBooks()
  }, [])


  function loadBooks() {
    API.getGoogleBooks()
      .then((res) => {setGoogleResults(res.data.items)
        console.log(res.data.items)
    })
      .catch((err) => console.log(err));
      console.log(google)
     
  }
    // const handleInputSearch = (e) => {
    //     const books = e.target.value;
    //     setBooks(books.toLowerCase());
    //     console.log('clicked')
    // };

    // Handles updating component state when the user types into the input field
    function handleInputSearch(event) {
        const { name, value } = event.target;
        setBooks({...books, [name]: value})
        console.log('clicked')
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
                title: "",
                author: "",
                description: "",
                image: "",
                link: ""
            }))
            //.then(() => loadBooks())
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
            // onChange={handleInputSearch}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={handleInputSearch}>
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Container>

      <div>
       
          <Container>
            {google.map((book, index) => (
              <Card style={{ width: "18rem" }} value={book} key={index}>
                  <Card.Img value={book} variant="top" src={book.volumeInfo.imageLinks}  />
                  <Card.Body>
                    <Card.Title value="title">{book.volumeInfo.title}</Card.Title>
                    <Card.Text value="description">Author(s): {book.volumeInfo.authors}</Card.Text>
                    <Card.Text value="description">{book.volumeInfo.description}</Card.Text>
                    <Button variant="primary" value="link" href={book.volumeInfo.canonicalVolumeLink}>View</Button>
                    <Button
                      variant="primary"
                      onClick={handleSaveBook}
                    >
                      Save
                    </Button>
                  </Card.Body>

              </Card>
            ))}
          </Container>

      </div>
    </div>
  );
};

export default SearchBar;
