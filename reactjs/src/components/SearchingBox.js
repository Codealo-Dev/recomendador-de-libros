import { useState } from "react";


export const SearchingBox = ( { setSearch } ) => {
    
    const [ inputValue, setInputValue ] = useState('');

    const handleSubmit = ( e ) => {

        e.preventDefault();

        console.log('New value:', inputValue );
        if( inputValue.length > 1 ) {
            
            setSearch( inputValue );
            setInputValue('');
        
        }
    }

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
        console.log( e.target.value );
    }

    return(
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    );

}