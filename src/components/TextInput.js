import React from 'react';
import '../assets/styles/text-input.css'

export default class TextInput extends React.Component {
    onButtonClick(e) {
        this.props.onChange(e.currentTarget.previousElementSibling.value)
    }

    onTextInputKeyPress(e){
        if (e.charCode === 13) {
            this.props.onChange(e.target.value)
        }
    }
    render() {
        return (
            <div className={`text-input-container width-${this.props.width !== undefined ? this.props.width : 1}`}>
                <input
                    className={`text-input`}
                    type={'text'}
                    onKeyPress={this.onTextInputKeyPress.bind(this)}
                    placeholder={this.props.placeholder}
                />
                <button
                    className={`text-input-btn`}
                    onClick = {this.onButtonClick.bind(this)}
                >
                    <span className={`icon-search`}></span>
                </button>
            </div>
        )
    }
}