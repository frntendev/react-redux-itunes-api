import * as FavouritesActions from '../actions/favourites';

const initialState = {
    data: [],
    favoritePopupShow: false
};
export default (state = initialState, action) => {
    switch (action.type) {
        case FavouritesActions.FAVORITE_ADD:
            const exist = state.data.find((item) => item.collectionId === action.payload.collectionId);
            if (!exist)
                return {
                    ...state,
                    data: [
                        ...state.data,
                        action.payload
                    ]
                };
            else
                return state;
        case FavouritesActions.FAVORITE_REMOVE:
            return {
                ...state,
                data: state.data.filter((item, index) => item.collectionId !== action.payload)
            };
        case FavouritesActions.FAVOURITE_CHANGE_POPUP_STATUS:
            return {
                ...state,
                favoritePopupShow: !state.favoritePopupShow
            };

        default:
            return state
    }
};