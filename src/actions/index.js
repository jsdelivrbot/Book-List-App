export function selectBook(book) {
    //This function is ActionCreator that returns action, an object with a type property
    return {
        type : 'BOOK_SELECTED',
        payload: book
    };
}