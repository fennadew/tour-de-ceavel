import React, {Component} from 'react';
import Footer from './Footer';

import {data} from '../data/Data';
import WebSocket from "../Websocket";

class Detail extends Component {
    state = {
        heatPumpActive: false,
        productionActive: false,
        productionStatus: "green",
        data: {}
    }
    getWebSocketData = (data) => {
        let heatPumpActive = false;
        let productionActive = false;
        let productionStatus;
        if (data.heatpump) {
            heatPumpActive = true
            data.heatpump = Math.round(data.heatpump * 100) /100

        }

        if (data.solar) {
            productionActive = true;
            let newSolar = -1 * data.solar
            data.solar = Math.round(newSolar * 100) /100

            let heatpump = data.heatpump ? data.heatpump : 0;
            let diff = newSolar - (data.consumption + heatpump);
            if (diff > 0) {
                productionStatus = "green";
            } else {
                productionStatus = "red";
            }
        }
        else {
            productionStatus = "red";
        }

        data.consumption = Math.round(data.consumption * 100 ) / 100

        this.setState({
            data,
            heatPumpActive,
            productionActive,
            productionStatus
        });
    };

    render() {

        const boat = data.find(b => b.link === this.props.match.url);
        let content;

        if (boat) {
            content =
                <section className="detail-container">
                    <div className="hexagon detail-hexagon lazyload" style={{backgroundImage: `url(${boat.imgUrl})`}}>
                        <h1>{boat.name}</h1>
                    </div>
                    <div className="facts">
                        <ul className="facts-list">
                            <li className={this.state.heatPumpActive ? "red" : "inactive"}
                                style={{backgroundImage: `url(${require('../images/heatpump.png')})`}}></li>
                            <li className={this.state.productionActive ? "green big" : "inactive big"}
                                style={{backgroundImage: `url(${require('../images/production.png')})`}}>
                            </li>
                            <li className="red"
                                style={{backgroundImage: `url(${require('../images/consumption.png')})`}}></li>
                            <li style={{backgroundImage: `url(${require('../images/ceuvel.png')})`}}
                                className="block"></li>
                        </ul>
                        <div className="status">
                        <span className={this.state.heatPumpActive ? "left" : "left hidden"}>{this.state.data.heatpump}W</span>
                        <span className={this.state.productionActive ? "center" : "center hidden"}>{this.state.data.solar}W</span>
                        <span className={"right"}>{this.state.data.consumption}W</span>
                        </div>
                        <div className="moving-lines red one">
                            <hr/>
                        </div>
                        <div className={this.state.heatPumpActive ? "red moving-lines three" : "moving-lines hidden one"}>
                            <hr/>
                        </div>
                        <div
                            className={this.state.productionActive ? "moving-lines green two" : "moving-lines hidden two"}>
                            <hr/>
                        </div>
                        <div className={`moving-lines four ${this.state.productionStatus}`}>
                            <hr/>
                        </div>
                        <div className={this.state.heatPumpActive ? "moving-lines five red" : "moving-lines five red hidden"}>
                            <hr/>
                        </div>
                        <div className={`moving-lines six red`}>
                            <hr/>
                        </div>
                    </div>
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
