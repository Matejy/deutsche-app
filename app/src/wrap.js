import React from 'react';
import anime from 'animejs/lib/anime.es.js';

import Input from './components/input';
import WordDisplay from './components/word_display';



export default class Wrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wrapInput: '',
            wrapWord: '',
            correctBool: undefined,
            correctCounter: 0,
            rightCounter: 0,
            wrongCounter: 0,
            correcterCounter: 0,
            showSW: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.displayWords = this.displayWords.bind(this);
    }
    handleChange = (input) => {
        this.setState({wrapInput: input});
    }
    displayWords = (word) => {
        this.setState({wrapWord: word});
        this.setState({correctBool: undefined});
        this.setState({showSW: ''});
        anime({
            targets: '.css-boolean',
            backgroundColor: '#e9ecef'
        })
    }
    handleSubmit(event) {
        if(this.state.wrapInput === this.state.wrapWord[1]) {
            this.setState({correctBool: true});
            this.setState({showSW: this.state.wrapWord[1]});
            this.setState({rightCounter: this.state.rightCounter + 1});
            this.setState({correcterCounter: this.state.correcterCounter + 1});
            anime({
                targets: '.css-boolean',
                backgroundColor: '#60e660'
            })
        }
        else {
            this.setState({correctBool: false});
            this.setState({correctCounter: this.state.correctCounter + 1});
            anime({
                targets: '.css-boolean',
                backgroundColor: '#ed1d1d'
            });
            if(this.state.correctCounter === 2){
                this.setState({showSW: this.state.wrapWord[1]});
                this.setState({rightCounter: 0});
                this.setState({correctCounter: 0});
                this.setState({wrongCounter: this.state.wrongCounter + 1});
            }
        }
        this.setState({wrapInput: ''});
        event.preventDefault();
    }
    render() {
        return(
            <form className="container" onSubmit={this.handleSubmit}>
                <div className="row form-group h-40">
                    <div className="top-50-per col">
                        <WordDisplay onDisplayWords={this.displayWords}/>
                        <p className="p-5-rem">{this.state.showSW}</p>
                    </div>
                </div>
                <div className="c-h-50-vh-t row form-group h-40">
                    <div className="col top-50-per">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <input type="submit" name="submit" className="btn btn-outline-primary"/>
                            </div>
                            <Input onHandleChange={this.handleChange} />
                            <div className="input-group-append">
                                <p className="input-group-text css-boolean col-w">{this.state.correctBool + ""}</p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <p className="input-group-text css-boolean bdc-b">Correct {this.state.correcterCounter}</p>
                                </div>
                                <div className="col-sm">
                                    <p className="input-group-text css-boolean bdc-b">Wrong {this.state.wrongCounter}</p>
                                </div>
                                <div className="col-sm">
                                    <p className="input-group-text css-boolean bdc-b">Streak {this.state.rightCounter}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}