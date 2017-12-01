import React from 'react';
import '../assets/styles/search-item.css'

export default class SearchItem extends React.Component {

    addFavourites() {
        this.props.addFavourites(this.props.item.collectionId)
    }

    removeFavourite() {
        this.props.removeFavourite(this.props.item.collectionId)
    }

    render() {
        return (
            <div id={this.props.item.collectionId}
                 className={`search-item-container${this.props.additionalClass !== undefined ? ' ' + this.props.additionalClass : ""}`}>
                <div className={`search-item-cover`}>
                    <img alt={this.props.item.artistName} src={this.props.item.artworkUrl100}/>
                </div>
                <span className={`search-item-title`}>
                    {this.props.item.artistName}
                </span>
                <span className={`search-item-author`}>
                    {this.props.item.collectionName}
                </span>
                <span
                    className={`search-item-add-favourite`}
                    onClick={this.props.isAdded ? this.removeFavourite.bind(this) : this.addFavourites.bind(this)}>
                        {this.props.isAdded ? "Remove favourite" : "Add to favourites"}
                </span>
            </div>
        )
    }
}
