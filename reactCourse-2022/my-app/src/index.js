import React from "react";
import ReactDOM from "react-dom";
import { Bookone } from "./book";
import "./index.css";

const firstBook = {
  img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/2419/9780241988725.jpg",
  title: "title book",
  author: "hiba",
};
const secondBook = {
  img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/2419/9780241988725.jpg",
  title: "title book2",
  author: "hiba",
};

function BookList() {
  return (
    <section className="booklist">
      <Bookone />
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>this book is very special</p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

//object destructuring
const Book = ({ img, title, author, children }) => {
  // console.log(props);
  // const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4 style={{ color: "#617d98", fontSize: "0.75rem" }}>{author}</h4>
      <p>{children}</p>
    </article>
  );
};

const names = ["john", "peter", "susan"];
const newNames = names.map;
<img src={img} alt="" />;
const names = ["john", "peter", "susan"];
const newNames = names.map;
<img src={img} alt="" />;
const names = ["john", "peter", "susan"];
const newNames = names.map;
<img src={img} alt="" />;
const names = ["john", "peter", "susan"];
const newNames = names.map;
<img src={img} alt="" />;
const names = ["john", "peter", "susan"];
const newNames = names.map;
<img src={img} alt="" />;
const names = ["john", "peter", "susan"];
const newNames = names.map;
<img src={img} alt="" />;

ReactDOM.render(<BookList></BookList>, document.getElementById("root"));
