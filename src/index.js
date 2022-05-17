import React from 'react'
import ReactDOM from 'react-dom';
import {books} from './books';
import {greeting} from './testing/testing';
// CSS
import './index.css';
import SpecificBook from './Book';



function BookList(){
    console.log(greeting);
    return (
        <section className='booklist'> 
            {books.map((book)=>{
                const {img,title,author}=book
                return <SpecificBook key={book.id} {...book} />;
            })}
        </section>
    );
}

ReactDOM.render(<BookList/>,document.getElementById('root'));