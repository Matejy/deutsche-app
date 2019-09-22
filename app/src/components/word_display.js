import React from 'react';

function randomWord(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
export default class WordDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {word:''};

        this.displayWords = this.displayWords.bind(this);
    }
    displayWords(event) {
        var data = require("../db/db.json");
        var i = randomWord(178);
        var word = [data[i].g_w, data[i].s_w];
        this.setState({word: word});
        this.props.onDisplayWords(word);        
        event.preventDefault();
    }
    render() {
        return(
            <div>
                <p className="p-5-rem">{this.state.word[0]}</p>
                <button onClick={this.displayWords} className="btn btn-outline-primary">Slovo</button>
            </div>
        )
    }
}