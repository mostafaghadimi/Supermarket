import React, { Component } from 'react'
import {Form, Button} from 'semantic-ui-react'

import '../../assets/css/comment.css'

export default class AddComment extends Component {
    render() {
        return (
            <Form reply className="add-comment" >
              <Form.TextArea />
              <Button content='ثبت نظر' labelPosition='left' icon='edit' primary />
            </Form>
        )
    }
}
