import React, { Component } from 'react'

import '../../../assets/css/addition.css'

export default class Addition extends Component {
    render() {
        return (
            <div className="addition-container">
                <div className="addition-form">
                    <img className="addition-form-image" src={require('../../../assets/img/addition.jpg')} />
                </div>
                <div className="addition-info">
                    <div className="addition-input">
                        <input type="text" placeholder="نام فروشگاه"/>
                    </div>
                    <div className="addition-input">
                        <input type="text" placeholder="آدرس فروشگاه" />
                    </div>
                    <div className="addition-input">
                        <input type="tel" placeholder="شماره تماس فروشگاه" />
                    </div>
                    <div className="addition-input">
                        <input type="file" />
                    </div>
                </div>
                <div className="addition-button-container">
                    <button className="addition-button">ثبت فروشگاه</button>
                </div>
            </div>
        )
    }
}
