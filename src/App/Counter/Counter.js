import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

export class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            value: 0
        }

        this.handleIncrease = () => {
            this.setState({
                value: Math.min(this.state.value + 1, 20)
            })
        }

        this.handleDecrease = () => {
            this.setState({
                value: Math.max(this.state.value - 1, 0)
            })
        }
    }
    render() {
        const computedStyle = this.state.value < 10 ? "danger" : "success"
        return (
            <div>
            <h1>Hello Counter</h1>
        <ProgressBar active bsStyle={computedStyle} now={this.state.value} max={20} />
            <h3>Value: {this.state.value}</h3>
        <Button bsStyle="success" onClick={this.handleIncrease}>Increase</Button>
        <Button bsStyle="danger" onClick={this.handleDecrease}>Decrease</Button>
        </div>
    )
    }
}

export default Counter