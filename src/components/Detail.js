import React, {Component} from 'react';
import Footer from './Footer';

import {data} from '../data/Data';
import WebSocket from "../Websocket";

class Detail extends Component {
    state = {
        heatPumpActive: true,
        productionActive: true,
    }
    getWebSocketData = (data) => {
        console.log(data);
        let heatPumpActive = false;
        let productionActive = false;
        if (data.heatpump) {
            heatPumpActive = true;
        }
        console.log(data.solar)
        if (data.solar) {
            productionActive = true;
            let heatpump = data.heatpump ? data.heatpump : 0;
            let diff = data.solar - (data.consumption + heatpump);
            console.log(typeof data.solar);
        }

        this.setState({
            heatPumpActive,
            productionActive
        });

    };

    render() {
        const boat = data.find(b => b.link === this.props.match.url);
        let content;

        if (boat) {
            content =
                <section className="detail-container">
                    <div className="hexagon detail-hexagon" style={{backgroundImage: `url(${boat.imgUrl})`}}>
                        <h1>{boat.name}</h1>
                    </div>
                    <ul className="facts-list">
                        <li className={this.state.heatPumpActive ? "red" : "inactive"}
                            style={{backgroundImage: `url(${require('../images/heatpump.png')})`}}></li>
                        <li className={this.state.productionActive ? "big" : "inactive big"}
                            style={{backgroundImage: `url(${require('../images/production.png')})`}}>
                        </li>
                        <li className="red"
                            style={{backgroundImage: `url(${require('../images/consumption.png')})`}}></li>
                        <li style={{backgroundImage: `url(${require('../images/ceuvel.png')})`}} className="block"></li>
                    </ul>
                    <h2>Description</h2>
                    <p>{boat.detailText}</p>
                    <Footer boat={boat}/>
                    <WebSocket streamCallback={this.getWebSocketData} boat={boat}/>
                </section>
        }

        else {
            content =
                <section>
                    <h1>404</h1>
                </section>;
        }

        return (
            <div className="inner">
                {content}
            </div>
        )
    }
}

export default Detail;
