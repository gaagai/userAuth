import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        name: '',
        lastName: ''
    }

    handelNameChange = (event) => {
        this.setState({
            name:event.target.value
        })
    }
    handelLastNameChange = (event) => {
        this.setState({
            lastName:event.target.value
        })
    }


    onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.onSubmitHandler}>
                    <div className="formelement">
                        <label>Enter Name</label>
                        <input
                            type="text"
                            onChange={this.handelNameChange}
                            value={this.state.name}
                        />
                    </div>
                    <div className="formelement">
                    <label>Enter Last Name</label>
                    <input
                            type="text"
                            value={this.state.lastName}
                            onChange={this.handelLastNameChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Controlled;