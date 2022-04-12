//1

const firstBook = {
  name: "The kite runner",
  author: "khaled Hosseine",
  year: 2003,
};

const secondtBook = {
  name: "War and Peace",
  author: "Tolstoy",
  year: 1867,
};

//2+3

const bookUtils = {
  getFirstPublished: function (book1, book2) {
    if (book1.year > book2.year) return book2;
    else return book1;
  },
  setNewEdition: function (book, editionYear) {
    book.latestEdition = editionYear;
  },
  setLanguage: function (book, language) {
    book.textLanguage = language;
  },
  setTranslation: function (book, language, translator) {
    book.translation = { language, translator };
  },

  setPublisher: function (book, name, location) {
    book.publisher = { name, location };
  },

  isSamePublisher: function (book1, book2) {
    if (book1.publisher === book2.publisher) return true;
    else return false;
  },
};

bookUtils.setTranslation(firstBook, "english", "Arabic");
console.log(firstBook);
