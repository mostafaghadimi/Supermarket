import React, {Component} from 'react'

import '../../../assets/css/addition.css'
import {Card, Grid, Item, Segment} from "semantic-ui-react";


export default class ProductList extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        markets: [],
    };

    componentDidMount() {
        fetch('http://localhost:8000/market/product_list')
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
                                        const {name, price, amount} = market;
                                        return (
                                            <Card
                                                image='http://www.cndajin.com/data/wls/82/10413979.png'
                                                header={"نام: " + name}
                                                meta={"قیمت: " + price}
                                                description={"تعداد موجود: " + amount}
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
