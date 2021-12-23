import { useEffect, useState } from "react";
import { BookItem } from "./BookItem";

export const BooksGrid = ( { search } ) => {

    const [ books, setBooks ] = useState([]);

    const getBooks = async () => {

        const api_key = 'AIzaSyC5U15Nolm08e12l8Ayy0Avm6ZzakeRYOU';
        const url = `https://www.googleapis.com/books/v1/volumes?q=${ search }&download=epub&key=${ api_key }&filter=paid-ebooks&maxResults=10`;
        const resp = await fetch( url );
        const { items:data } = await resp.json();

        setBooks( data.map( book => {

            return {

                id: book.id,
                title: book.volumeInfo.title,
                img: book.volumeInfo.imageLinks.thumbnail

            }

        }));
        
    }

    console.log(books)
    
    useEffect( () => {

        getBooks();

    }, [ search ])


    return(
        <>
            <p>{ search }</p>
            <div>
                {
                    books.map( book =>

                        <BookItem
                            key={ book.id }
                            { ...book }
                        /> 
                        
                    )
                }
            </div>
        </>
    );

}