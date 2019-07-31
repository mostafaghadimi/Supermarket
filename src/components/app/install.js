import React, { Component } from 'react'
import {Button} from 'semantic-ui-react'

import '../../assets/css/app-install.css'


export default class Install extends Component {

    componentDidMount() {
        let deferredPrompt;   
        var banner = document.querySelector('#banner');
    
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            console.log('beforeinstallprompt fired! ^_^');
            deferredPrompt = e;
            return false;
        })
    
        banner.addEventListener('click', () => {
          if (deferredPrompt !== undefined) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((result) => {
              if (result.outcome == 'dismissed') {
                console.log('cancelled');
              }
    
              else {
                console.log('added to homescreen');
              }
              deferredPrompt = null;
            })
    
          }
        })
    
      }

    render() {
        return (
                <div className="app-install-container">
                    <div className="app-image-container">
                        <img src={require('../../assets/img/appIcon.png')} className="app-image"/>
                        <Button color="orange" id="banner">
                            نصب اپلیکیشن سوپری
                        </Button>
                    </div>
                </div>
        )
    }
}
