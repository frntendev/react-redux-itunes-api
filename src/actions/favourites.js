export const FAVORITE_ADD = "FAVORITE_ADD";
export const FAVORITE_REMOVE = "FAVORITE_REMOVE";
export const FAVOURITE_CHANGE_POPUP_STATUS = "FAVOURITE_CHANGE_POPUP_STATUS";

export const addFavourites = id => (dispatch,getState) =>{
    getState().searchInfo.data.results.forEach((item) => {
        if (item.collectionId === id) {
            dispatch({
                type: FAVORITE_ADD,
                payload: item
            })
        }
    })
};
export const removeFavourite = id => dispatch =>{
    dispatch({
        type: FAVORITE_REMOVE,
        payload: id
    })
};
export const changeFavouritePopupStatus = () => dispatch => {
    dispatch({
        type: FAVOURITE_CHANGE_POPUP_STATUS
    })
};