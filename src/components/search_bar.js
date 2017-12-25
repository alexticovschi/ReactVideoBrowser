import React, { Component } from 'react';

// create a class-based component named SearchBar that contains an input
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
    render() {
        // add an event handler to the input element
        // the event handler will be triggered whenever the event occurs
        // when the input changes, onInputChange will be executed;
        return (
            <div className="search-bar">
                {/* Whenever the input is changed, onChange will call onInputChange with the new value from the input itself */}
                <input onChange={event => this.onInputChange( event.target.value )} />
                <br/>
                {/* {this.state.term} */}
            </div>
            
        );
    }

    onInputChange(term) {
        this.setState({term}); // set the state of this component
        this.props.onSearchTermChange(term); // call onSearchTermChange with the new term
    }

    
}
// export the component
export default SearchBar;


