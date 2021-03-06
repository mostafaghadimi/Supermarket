import React, {Component} from 'react'
import {Form, Button} from 'semantic-ui-react'

import '../../assets/css/comment.css'


const pageData = {
    comment: "",
};

export default class AddComment extends Component {
    submit = () => {
        const isShop = this.props.isShop;
        if (isShop){
            const marketId = JSON.parse(localStorage.getItem("market_id"));
            const item = JSON.parse(localStorage.getItem("USER_INFO"));
            fetch('http://192.168.194.100:8000/market/comment/', {
                method: 'POST',
                body: JSON.stringify({
                    id: marketId,
                    owner: item.id,
                    api: item.api,
                    comment: pageData.comment,

                }),
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json; charset=UTF-8"
                },
                credentials: 'same-origin'
            })
                .then(res => res.json())
                .then((data) => {
                    this.setState({market: data});
                })
                .catch(console.log);
        } else {

            const product = JSON.parse(localStorage.getItem("product"));
            const item = JSON.parse(localStorage.getItem("USER_INFO"));
            fetch('http://192.168.194.100:8000/model/comment/', {
                method: 'POST',
                body: JSON.stringify({
                    id: product,
                    owner: item.id,
                    api: item.api,
                    comment: pageData.comment,

                }),
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json; charset=UTF-8"
                },
                credentials: 'same-origin'
            })
                .then(res => res.json())
                .then((data) => {
                    this.setState({market: data});
                })
                .catch(console.log);
        }
    };
    commentChange = (e) => {
        pageData.comment = e.target.value;
    };

    render() {
        return (
            <Form reply className="add-comment">
                <Form.TextArea onChange={this.commentChange}/>
                <Button content='ثبت نظر' labelPosition='left' icon='edit' primary onClick={this.submit}/>
            </Form>
        )
    }
}
