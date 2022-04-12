//1
let book = {
  tittle: "Oprah",
  author: "Oprah Winfry",
  year: 1997,
  category: "Biography",
};

//2

function bookDetails(book) {
  console.log(
    `The book ${book.tittle} was written by ${book.author} in the year ${book.year}`
  );
}

bookDetails(book);
