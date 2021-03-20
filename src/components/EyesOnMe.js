import React, { Component } from 'react';

export default class EyesOnMe extends React.Component {

    handleOnFocus = () => {
        console.log('Good!')
    }

    handleOnBlur = () => {
        console.log('Hey! Eyes on me!')
    }
    render(){
        return(
            <div>
                <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}>button</button>
            </div>
        )

    }
}


