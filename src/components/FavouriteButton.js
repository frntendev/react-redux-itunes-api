import React from 'react';
import '../assets/styles/favourite-button.css'

export default class FavouriteButton extends React.Component {
    state = {adding: false};
    componentWillReceiveProps(props) {
        if (this.props.count !== props.count) {
            this.setState({
                adding: true
            });
            window.setTimeout(() => {
                this.setState({
                    adding: false
                })
            }, 300)
        }
    }
    onClick(){
        this.props.changeFavouritePopupStatus()
    }
    render() {
        return (
            <div onClick={this.onClick.bind(this)} className={`favourite-button-container${this.state.adding ? " changing" : ""}${this.props.count===0?" disabled":""}`}>
                <span className={`icon-heart`}></span>
                <span className={`favourite-count`}>{this.props.count}</span>
            </div>
        )
    }
}