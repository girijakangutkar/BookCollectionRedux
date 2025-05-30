import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, DeleteBook, editBook, markAsRead } from "./actions";
import { Button, Center, Field, Fieldset, Input } from "@chakra-ui/react";
import { Card, Stack } from "@chakra-ui/react";

function BookCollection() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [editId, setEditId] = useState(null);
  const bookLibrary = useSelector((state) => state);
  const dispatch = useDispatch();

  function AllBooks() {
    return [...bookLibrary].sort((a, b) => b.id - a.id);
  }

  return (
    <div className="container">
      <div className="col1">
        <Card.Root padding={10} margin={3}>
          <Fieldset.Root>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (editId) {
                  dispatch(editBook(editId, title, author, genre));
                  setEditId(null);
                } else {
                  dispatch(addBook(title, author, genre));
                }
                setTitle("");
                setAuthor("");
                setGenre("");
              }}
              id="formField"
            >
              <Fieldset.Content
                onSubmit={(e) => {
                  e.preventDefault();
                  if (editId) {
                    dispatch(editBook(editId, title, author, genre));
                    setEditId(null);
                  } else {
                    dispatch(addBook(title, author, genre));
                  }
                  setTitle("");
                  setAuthor("");
                  setGenre("");
                }}
              >
                <Field.Root>
                  <Field.Label>Book Title:</Field.Label>
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                  />
                </Field.Root>

                <Field.Root>
                  <Field.Label>Author:</Field.Label>
                  <Input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Author"
                  />
                </Field.Root>

                <Field.Root>
                  <Field.Label>Genre: </Field.Label>
                  <Input
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    placeholder="Genre"
                  />
                </Field.Root>
              </Fieldset.Content>
              <Button
                type="submit"
                alignSelf="flex-start"
                colorPalette="cyan"
                marginTop={10}
              >
                {editId ? "Update Book" : "Add Book"}
              </Button>
            </form>
          </Fieldset.Root>
        </Card.Root>
      </div>

      <div className="col2">
        {/* <Stack gap="4" direction="row" wrap="wrap" margin={20}> */}
        {AllBooks().map((book) => (
          <Card.Root width="320px" key={book.id} margin={5}>
            <Card.Body
              gap="2"
              textDecoration={book.readStatus ? "line-through" : "none"}
            >
              <Card.Title mb="2">{book.title}</Card.Title>
              <Card.Title mb="2">{book.author}</Card.Title>
              <Card.Description>{book.genre}</Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <Button
                colorPalette="teal"
                onClick={() => {
                  setEditId(book.id);
                  setTitle(book.title);
                  setAuthor(book.author);
                  setGenre(book.genre);
                }}
                variant="subtle"
              >
                Edit
              </Button>
              <Button
                colorPalette="red"
                onClick={() => dispatch(DeleteBook(book.id))}
                variant="subtle"
              >
                Delete
              </Button>
              <Button
                colorPalette="green"
                onClick={() => dispatch(markAsRead(book.id))}
                variant="subtle"
              >
                {book.readStatus ? "Unread" : "Mark as Read"}
              </Button>
            </Card.Footer>
          </Card.Root>
        ))}
        {/* </Stack> */}
      </div>
    </div>
  );
}

export default BookCollection;
