const getTheTitles = function(books) {
    const bookTitles = books.map(book => book.title);
    return bookTitles
}

module.exports = getTheTitles;

// const books = [
//     {
//       title: 'Book',
//       author: 'Name'
//     },
//     {
//       title: 'Book2',
//       author: 'Name2'
//     }
//   ]