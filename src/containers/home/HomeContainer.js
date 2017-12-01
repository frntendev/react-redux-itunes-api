import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getSearchInfo} from '../../actions/searchInfo'
import {changeFavouritePopupStatus,addFavourites,removeFavourite} from '../../actions/favourites'
import TextInput from '../../components/TextInput'
import FavouriteButton from '../../components/FavouriteButton'
import SearchList from '../../components/SearchList'
import '../../assets/styles/home-page.css'
import FavouritesListPopup from "../../components/FavouritesListPopup";

const Home = props => (
    <div className={`home-page-container`}>
        <div className={`header`}>
            <div className={`inside-container`}>
                <div className={`search-box-container`}>
                    <FavouriteButton
                        count={props.favourites.data.length}
                        changeFavouritePopupStatus={props.changeFavouritePopupStatus}
                    />
                    <TextInput
                        width={3}
                        onChange={props.getSearchInfo}
                        placeholder={`name or keyword`}
                    />
                </div>
            </div>
        </div>
        <div className={`body`}>
            {props.favourites.favoritePopupShow &&
            <FavouritesListPopup
                favourites={props.favourites.data}
                addOrRemoveFavourites={props.addOrRemoveFavourites}
                removeFavourite={props.removeFavourite}
                addFavourites={props.addFavourites}
                changeFavouritePopupStatus={props.changeFavouritePopupStatus}
            />
            }
            <div className={`inside-container`}>
                <div className={`search-items-container`}>
                    <SearchList
                        favourites={props.favourites}
                        addOrRemoveFavourites={props.addOrRemoveFavourites}
                        removeFavourite={props.removeFavourite}
                        addFavourites={props.addFavourites}
                        searchInfo={props.searchInfo}
                    />
                </div>
            </div>
        </div>
    </div>
);

const mapStateToProps = state => ({
    searchInfo: state.searchInfo,
    favourites: state.favourites
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getSearchInfo: (req) => getSearchInfo(req),
    addFavourites: (req) => addFavourites(req),
    removeFavourite: (req) => removeFavourite(req),
    changeFavouritePopupStatus: () => changeFavouritePopupStatus()

}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
