import React, { useContext } from 'react';
import BookDetails from './BookDetails';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
    const { books } = useContext(BookContext);
    return books.length ? (
        <div className="jumbotron">
            <ul className="list-group">
                {books.map(book => {
                    return (<BookDetails book={book} key={book.id} />);
                })}
            </ul>
        </div>

    ) : (
            <div className="jumbotron">
                <ul className="list-group">
                    <li className="list-group-item">
                        No books to read. Hello free time :).
                    </li>
                </ul>
            </div>

        );
}

export default BookList;