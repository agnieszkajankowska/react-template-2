import React, {Component} from 'react';
import {Counter} from '../App/Counter/Counter'
import {Counter2} from '../App/Counter/Counter2'
import {Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello world</h1>
                <Counter />
                <Counter2 name="Custom Counter 1" maxValue={15} minStyle="warning" maxStyle="info"/>
                <Counter2 name="Custom Counter 2" maxValue={25} minStyle="danger" maxStyle="warning"/>
                <div className="links">
                    <LinkContainer to="/contacts">
                        <Button bsStyle="info">Contacts</Button>
                    </LinkContainer>
                    <LinkContainer to="/lifecycle">
                        <Button bsStyle="info">Lifecycle</Button>
                    </LinkContainer>
                </div>
            </div>
        )
            ;
    }
}

export default App;