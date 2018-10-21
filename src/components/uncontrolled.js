import React, { Component } from 'react';

class Uncontrolled extends Component {
//dfdfdfdf

    render(){
        return(
            <div className="container">
            <form>
                <div className="formelement">
                    <label>Enter Name</label>
                    <input
                        type="text"
                    />
                </div>
                <div className="formelement">
                <label>Enter Last Name</label>
                <input
                        type="text"
                    />
                </div>
            </form>
        </div>
        )
    }
}

export default Uncontrolled;