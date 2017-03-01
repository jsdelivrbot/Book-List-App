/**
 * Created by Hazard on 01.03.2017.
 */
export default function(state = null, action){
    //This function state is not an app state, but just a state of this reducer is responsible for

    switch(action.type){

        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}