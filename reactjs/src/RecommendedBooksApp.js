
import { useState } from "react";
import { SearchingBox } from './components/SearchingBox';
import { BooksGrid } from './components/BooksGrid'

const RecommendedBooksApp = () => {

  const [ search, setSearch ] = useState('react js');

  return (
    <>
      <p>Recomendador de libros</p>
      <SearchingBox setSearch = { setSearch }/>
      <BooksGrid search = { search } />
    </>
  );

}

export default RecommendedBooksApp;
