import React from 'react';
import SearchItem from './SearchItem';
import SearchItemPlaceholder from './SearchItemPlaceholder';
import * as SearchActions from '../actions/searchInfo';
import _ from 'lodash';

export default class SearchList extends React.Component {

    renderItems() {
        if (this.props.searchInfo.readyState === SearchActions.SEARCH_INFO_FETCHING) {
            return <SearchItemPlaceholder/>
        }
        else if (this.props.searchInfo.readyState === SearchActions.SEARCH_INFO_FETCHED) {
            const data = this.props.searchInfo.data;
            if (data.resultCount > 0) {
                let itemsArray = [];
                data.results.map((item, index) => {
                    let exist = _.findIndex(this.props.favourites.data, function(e) { return e.collectionId === item.collectionId; });
                    itemsArray.push(
                        <SearchItem
                            key={`search-item-${index}`}
                            item={item}
                            addOrRemoveFavourites={this.props.addOrRemoveFavourites}
                            addFavourites={this.props.addFavourites}
                            removeFavourite={this.props.removeFavourite}
                            isAdded={exist > -1}
                        />
                    );
                });
                return itemsArray;
            }
            else {
                return <p className={`search-title warn`}>The name that you entared not matched</p>
            }
        }

        else {
            return <p className={`search-title`}>Please enter a name to search itunes items</p>
        }

    }

    render() {
        return (
            this.renderItems()
        )
    }
}