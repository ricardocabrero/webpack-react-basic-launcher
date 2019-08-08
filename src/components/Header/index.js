import React, { Component } from 'react'

export class Header extends Component {

    state = {
        task: {
            title: 'first task',
            done: true
        }
    }

    handleClick = () => {
        const { task } = this.state
        task.done = !task.done
        this.setState({ task }) 
    }

    render(){
        const { task } = this.state
        return(
            <div>
                <h3>{task.title}</h3>
                <h1>{task.done.toString()}</h1>
                <button onClick={this.handleClick}>
                Click here!
                </button>
            </div>
        )
    }
}