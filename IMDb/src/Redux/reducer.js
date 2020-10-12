export const initialState = {
    movieName: '',
    moviesList: [],
    singleMovie: [],
    WatchList: [],
    name: null,
    homeMoviesList: [],
    searchMovielist: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'All-Movies':
            return {
                ...state,
                moviesList: [action.item]
            }
        case 'Home-Movies':
            return {
                ...state,
                homeMoviesList: [action.item]
            }
        case 'Search-Movies':
            return {
                ...state,
                searchMovielist: [action.item]
            }
        case 'Name':
            return {
                ...state,
                name: action.item
            }
        case 'Movie-Name':
            return {
                ...state,
                movieName: [action.item]
            }
        case 'Single-Movie':
            return {
                ...state,
                singleMovie: [action.item]
            }
        case 'Add-to-WatchList':
            return {
                ...state,
                WatchList: [...state.WatchList, action.item]
            }
        default:
            return state;
    }
}

export default reducer