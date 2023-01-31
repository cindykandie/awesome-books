import Store from './store.js';
// UI class: Handles UI Tasks
class UI {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#bookList');

    const row = document.createElement('tr');
    row.classList.add('row');
    const bookContent = document.createElement('div');
    bookContent.classList.add('book-content');

    const createTitle = document.createElement('td');
    const createAuthor = document.createElement('td');
    createTitle.innerHTML = `${book.title}`;
    createAuthor.innerHTML = `by ${book.author}`;
    const createButton = document.createElement('td');
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.type = 'submit';
    removeBtn.innerText = 'Remove';
    if ((createTitle !== '') || (createAuthor !== '')) {
      createButton.appendChild(removeBtn);
      bookContent.appendChild(createTitle);
      bookContent.appendChild(createAuthor);
      row.appendChild(bookContent);
      row.appendChild(removeBtn);
      list.appendChild(row);
    }
  }

  static deleteBook(el) {
    if (el.classList.contains('remove-btn')) {
      el.parentElement.remove();
    }
  }

  static clearfields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}
export default UI;