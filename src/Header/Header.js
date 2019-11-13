import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { textFieldValue: '' }

        /* Binds the value of 'this' in the current context as the 'this' inside pf the handleChange function */
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ textFieldValue: event.taget.value });
    }

    generateLetterButtons() {
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
            <button onClick={() => this.props.recipesByLetterHandler(letter)}>
                {letter}
            </button>
        ));
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.recipesByNameHandler(this.state.textFieldValue);
        this.setState({ textFieldValue: '' });
    }

    render() {
        return (
            <div>
                <h1>Recipe Finder</h1>
                <p>Get Recipe By Letter</p>
                {this.generateLetterButtons()}
                <p>Get Recipe By Keyword</p>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.textFieldValue} onChange={this.handleChange} />
                    <input type='submit' value='Submit' />
                </form>
                <p>Get Random Recipe</p>
                <button onClick={() => this.props.randomRecipeHandler()}>Submit</button>
            </div>
        );
    }
}

export default Header;