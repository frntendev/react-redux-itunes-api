export const SEARCH_INFO_FAILED = "SEARCH_INFO_FAILED";
export const SEARCH_INFO_FETCHED = "SEARCH_INFO_FETCHED";
export const SEARCH_INFO_FETCHING = "SEARCH_INFO_FETCHING";
export const SEARCH_INFO_INVALID = "SEARCH_INFO_INVALID";

export const getSearchInfo = req => dispatch => {
    let searchTerm = req.split(' ').join('+');
    dispatch({
        type: SEARCH_INFO_FETCHING,
        searchTerm : searchTerm
    });
    fetch(`https://itunes.apple.com/search?entity=album&term=${searchTerm}`)
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: SEARCH_INFO_FETCHED,
                payload: res,
                searchTerm : searchTerm
            })
        })
        .catch(err=>{
            dispatch({
                type:SEARCH_INFO_FAILED,
                payload:err,
                searchTerm : searchTerm
            })
        })
};