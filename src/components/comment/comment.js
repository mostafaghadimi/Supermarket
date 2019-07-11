import React, { Component } from 'react'
import { Comment} from 'semantic-ui-react'

import '../../assets/css/comment.css'

export default class CommentForm extends Component {
    render() {
        return (
            <div className="comment">
            <Comment.Group>
            <Comment>
              <Comment.Avatar as='a' dir="rtl" src={require('../../assets/img/ok.jpg')} />
              <Comment.Content>
                <Comment.Author>{this.props.author}</Comment.Author>
                <Comment.Metadata>
                  <div>{this.props.date}</div>
                </Comment.Metadata>
                <Comment.Text>
                  <div>
                      {this.props.text}
                  </div>
                </Comment.Text>
              </Comment.Content>
            </Comment>
        
        
          </Comment.Group>
        </div>
        )
    }
}
