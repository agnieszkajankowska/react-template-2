import React from 'react'
import {Button, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'


export class Contacts extends React.Component {
    render() {
        return (
            <div className="contacts">
                <h1>Contacts</h1>
                <Form horizontal>
                    <FormGroup controlId="formInlineName">
                        <ControlLabel>Name</ControlLabel>
                        {' '}
                        <FormControl type="text"
                                     placeholder="Enter name"
                        />
                    </FormGroup>
                    {' '}
                    <FormGroup controlId="formInlineSurname">
                        <ControlLabel>Surname</ControlLabel>
                        {' '}
                        <FormControl type="text"
                                     placeholder="Enter surname"
                        />
                    </FormGroup>
                    <Button type="submit" bsStyle="info">
                        Add contact
                    </Button>
                </Form>
                <h3>All users</h3>
            </div>
        )
    }
}

export default Contacts