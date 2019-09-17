import React from 'react';
export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {inputTyped: ''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        var inputTyped = this.refers.value;
        var inputTypedLC = inputTyped.toLowerCase();
        this.props.onHandleChange(inputTypedLC);
    }
    render() {
        return(
            <input type="text"  value={this.state.value} onChange={this.handleChange} ref={(ref) => this.refers = ref} className="form-control"/>
        )
    }
}