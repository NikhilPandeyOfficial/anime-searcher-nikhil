import { FETCH_DEFAULT_SHOWS, SEARCH_SHOWS } from './../actions/naruto';

const initialState = {
    shows: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DEFAULT_SHOWS:
            return {
                ...state,
                shows: action.data
            }
        
        case SEARCH_SHOWS:
            return {
                ...state,
                shows: action.data
            }
    }
    return state;
}
