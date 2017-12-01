import React from 'react'
import _ from 'lodash'
import '../assets/styles/select-box.css'

export default class SelectBox extends React.Component {
    renderOptions() {
        let options = [];
        let favouritesArtistsArray = _.uniqBy(this.props.items, (e) => e.artistId);
        favouritesArtistsArray.map((item, index) => {
            options.push(
                <option value={item.artistId} key={`favourite-item-${index}`}>{item.artistName}</option>
            )
        });
        return options;
    }

    onSelectChange(e) {
        this.props.renderFilteredItems(e.target.value)
    }

    render() {
        return (
            <div className="styled-select blue semi-square">
                <select onChange={this.onSelectChange.bind(this)}>
                    <option value={-1}>Please select an artist</option>
                    {this.renderOptions()}
                </select>
                <span className={`icon-arrow-down`}></span>
            </div>
        )
    }
}