import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
    const { addBook } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(title, author);
        addBook(title, author);
        setTitle('');
        setAuthor('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlfor="title"> Book Title:</label>
                <input type="text" placeholder="book title" className="form-control" id={title} value={title}
                    onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlfor="author"> Book Author:</label>
                <input type="text" placeholder="author name" className="form-control" id="author" value={author}
                    onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <button type="submit" value="add book" class="btn btn-primary">Submit</button>
        </form>
    );
}

export default NewBookForm;