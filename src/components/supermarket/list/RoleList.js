import React, {Component} from 'react'

import '../../../assets/css/addition.css'
import {Card, Grid, Item, Segment} from "semantic-ui-react";


export default class RoleList extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        markets: [],
    };

    componentDidMount() {
        fetch('http://192.168.1.10:8000/market/role_list')
            .then(res => res.json())
            .then((data) => {
                this.setState({markets: data});
                console.log(this.state.markets)
            })
            .catch(console.log);
    }


    render() {
        const markets = this.state.markets;
        return (
            <Grid centered style={{backgroundColor: "ghostWhite"}}>
                <Grid.Column width={12}>
                    <Segment style={{backgroundColor: "snow"}}>
                        <React.Fragment>
                            <Card.Group>
                                {!this.state.isLoading ? (
                                    markets.map(market => {
                                        const {name, role} = market;
                                        return (
                                            <Card
                                                image='http://www.everseller.com/assets/everseller-market-47fe1c56726baf037a687c7b404e81eb007ad2be27564f4f14db6bc522f97038.png'
                                                header={name}
                                                description={role}
                                            />
                                        );
                                    })
                                    // If there is a delay in data, let's let the user know it's loading
                                ) : (
                                    <h3>Loading...</h3>
                                )}
                            </Card.Group>
                        </React.Fragment>
                    </Segment>
                </Grid.Column>
            </Grid>

        )
    }
}
