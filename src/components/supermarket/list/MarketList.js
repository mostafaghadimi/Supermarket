import React, {Component} from 'react'

import '../../../assets/css/addition.css'
import {Card, Grid, Segment} from "semantic-ui-react";


export default class MarketList extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        markets: [],
    };

    componentDidMount() {
        fetch('http://localhost:8000/market/list')
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
                                        const {name, address, phone_number, owner} = market;
                                        return (
                                            <Card
                                                image='https://d3u03kk87rjfaq.cloudfront.net/wp-content/uploads/2009/06/03145943/farmers-markets.jpg'
                                                header={name}
                                                meta={owner}
                                                description={address}
                                                extra={phone_number}
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
