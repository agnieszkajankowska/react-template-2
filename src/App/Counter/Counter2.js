import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

export class Counter2 extends React.Component {
    constructor() {
        super()
        this.state = {
            value: 0
        }

        this.handleIncrease = () => {
            this.setState({
                value: Math.min(this.state.value + 1, this.props.maxValue)
            })
        }

        this.handleDecrease = () => {
            this.setState({
                value: Math.max(this.state.value - 1, 0)
            })
        }
    }
    render() {
        const computedStyle = this.state.value < 10 ? this.props.maxStyle : this.props.minStyle
        return (
            <div>
                <h1>{this.props.name}</h1>
                <ProgressBar active bsStyle={computedStyle} now={this.state.value} max={this.props.maxValue} />
                <h3>Value: {this.state.value}</h3>
                <Button bsStyle="success" onClick={this.handleIncrease}>Increase</Button>
                <Button bsStyle="danger" onClick={this.handleDecrease}>Decrease</Button>
            </div>
        )
    }
}

export default Counter2