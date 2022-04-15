import React, { Component } from 'react'

export class First extends Component {
    constructor(props) {
        super()
        this.state = ({
            count: 0
        })
    }
    increament() {
        this.setState((prevState, props) => (
            console.log(props)
        ))
    }
  render() {
    return (
      <div>
          <button onClick={ () => this.increament()}>Increament</button>
      </div>
    )
  }
}

export default First