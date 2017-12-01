import React from 'react';
import SearchItem from "./SearchItem";

export default class FavouritesList extends React.Component {
    renderFavouriteList() {
        let favouriteArray = [], data = this.props.favourites;
        if (data.length > 0)
            data.map((item, index) => {
                favouriteArray.push(
                    <SearchItem
                        key={`favourite-item-${index}`}
                        item={item}
                        additionalClass={`favorites-list`}
                        addOrRemoveFavourites={this.props.addOrRemoveFavourites}
                        removeFavourite={this.props.removeFavourite}
                        addFavourites={this.props.addFavourites}
                        isAdded={true}
                    />
                )
            });
        else
            favouriteArray.push(<p className={'warn'}>No item for show</p>)
        return favouriteArray
    }

    render() {
        return (
            this.renderFavouriteList()
        )
    }
}