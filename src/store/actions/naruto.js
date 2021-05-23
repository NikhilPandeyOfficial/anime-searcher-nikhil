export const FETCH_DEFAULT_SHOWS = "FETCH_DEFAULT_SHOWS";
export const SEARCH_SHOWS = "SEARCH_SHOWS";

export const fetchDefaultShows = () => {
    return async (dispatch, getstate) => {
        try {
            const response = await fetch(`https://api.jikan.moe/v3/search/anime?q=naruto`);

            const resData = await response.json();

            dispatch({
                type: FETCH_DEFAULT_SHOWS,
                data: resData.results
            })
            
        } catch (error) {
            throw new Error("Something went wrong with requesting API!")
        }
    }
}

export const searchShows = (searchQuery) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`https://api.jikan.moe/v3/search/anime?q=${searchQuery}`);
            
            const resData = await response.json();

            dispatch({
                type: SEARCH_SHOWS,
                data: resData.results
            })
        } catch (error) {
            throw new Error("Something went wrong with requesting API!")
        }
    }
}