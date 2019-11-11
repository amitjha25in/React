import React, { useState } from 'react'

const Lists = () => {
    const [book, setBook] = useState(
        { bookName: 'First Book Name', Author: 'John' },
        { bookName: 'Second Book Name', Author: 'Doe' },
        { bookName: 'Third Book Name', Author: 'Sim' }
    );



    return (
        <div class="jumbotron">
            <h3>Book Lists</h3>
            <p>Bootstrap is the most popular HTML, CSS...</p>
            <ul class="list-group">
                {book.map(item => {
                    return (
                        <li class="list-group-item">{item.bookName} {item.Author}</li>
                    );
                })}

            </ul>
        </div>
    )
}

export default Lists
