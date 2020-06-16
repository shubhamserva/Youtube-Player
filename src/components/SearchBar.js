import React from 'react';

class SearchBar extends React.Component{
    state = {
        query: ''
    }
    OnInputChange = event=>{
        this.setState({query: event.target.value})
    }
    onFormSubmit= event=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.query);
    }

    render(){
        return(
            <div className = "search-bar ui segment">
                <form onSubmit ={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search Video</label>
                        <input type= "text"
                        onChange= {this.OnInputChange}
                        value = {this.state.query}
                        ></input>
                    </div>

                </form>
            </div>
        )
    }
}
export default SearchBar