
import '../../src/index.css';

export const BookItem = ( { img } ) => {
    
    return(
     
    <div className="book">

        <div className="book__cover">
            <img className="book__image" src={ img } alt="book cover" />
        </div>

    </div>

    );

}