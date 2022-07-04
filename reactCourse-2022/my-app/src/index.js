import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/2419/9780241988725.jpg"
    alt=""
  />
);

const Title = () => <h1>the book title</h1>;
const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem" }}>the author name</h4>
);

ReactDOM.render(<BookList></BookList>, document.getElementById("root"));
