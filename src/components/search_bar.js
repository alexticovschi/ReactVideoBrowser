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
            <div>
                {/* whenever we update the input element, whenever we change the value of it 
                    we change the state(this.state.term) of the element with the new value of the input 
                    - whenever we update our state, whenever we call this.setState it causes our component to automatically rerender
                      and push all the updated information into the DOM*/}
                <input onChange={event => this.setState({ term: event.target.value })} />
                <br/>
                {this.state.term}
            </div>
            
        );
    }

    
}
// export the component
export default SearchBar;


