import * as SearchActions from '../actions/searchInfo';

const initialState = {
    readyState: SearchActions.SEARCH_INFO_INVALID,
    searchTerm: "",
    data: null
};
export default (state = initialState, action) => {
    switch (action.type) {
        case SearchActions.SEARCH_INFO_FETCHING:
            return {
                ...state,
                readyState: SearchActions.SEARCH_INFO_FETCHING,
                searchTerm: action.searchTerm
            };
        case SearchActions.SEARCH_INFO_FAILED:
            return {
                ...state,
                readyState: SearchActions.SEARCH_INFO_FAILED,
                searchTerm: action.searchTerm,
                data: action.payload,
            };
        case SearchActions.SEARCH_INFO_FETCHED:
            return {
                ...state,
                readyState: SearchActions.SEARCH_INFO_FETCHED,
                searchTerm: action.searchTerm,
                data: action.payload,
            };

        default:
            return state
    }
};
