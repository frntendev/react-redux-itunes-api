import React from 'react';
import '../assets/styles/favourite-popup.css';
import SelectBox from "./SelectBox";
import FavouritesList from "./FavouritesList";

export default class FavouritesListPopup extends React.Component {
    state = {
        filteredItems: this.props.favourites
    };
    componentWillReceiveProps(props){
        this.setState({
            filteredItems:props.favourites
        })
    }
    closePopup() {
        this.props.changeFavouritePopupStatus()
    }

    renderFilteredItems(id) {
        let filteredArray = [];
        if (id == -1 || id === undefined)
            filteredArray = this.props.favourites;
        else
            this.props.favourites.map((item, index) => {
                if (item.artistId == id)
                    filteredArray.push(item)
            });
        this.setState({
            filteredItems: filteredArray
        })
    }

    render() {
        return (
            <div className={`favourites-popup-background`}>
                <div className="favourites-popup-container">
                    <div className="favourites-popup-header">
                        <span onClick={this.closePopup.bind(this)} className={`icon-cross`}></span>
                    </div>
                    <div className="favourites-popup-body">
                        <SelectBox
                            items={this.props.favourites}
                            renderFilteredItems={this.renderFilteredItems.bind(this)}
                        />
                        <div className={`favourites-list-container`}>
                            <FavouritesList
                                addOrRemoveFavourites={this.props.addOrRemoveFavourites}
                                removeFavourite={this.props.removeFavourite}
                                addFavourites={this.props.addFavourites}
                                favourites={this.state.filteredItems}
                            />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}