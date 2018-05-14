import React from 'react';
import Footer from './Footer';

import {data} from '../data/Data';
import WebSocket from "../Websocket";

const Detail = (props) => {

    const boat = data.find(b => b.link === props.match.url);
    let content;

    if (boat)
        content =
        <div>
            <section className="detail-container">
                <div className="hexagon detail-hexagon" style={{backgroundImage: `url(${boat.imgUrl})`}}>
                    <h1>{boat.name}</h1>
                </div>
                <ul className="facts-list">
                    <li>Data</li>
                    <li className="big">Data</li>
                    <li>Data</li>
                </ul>
                <h2>Description</h2>
                <p>{boat.detailText}</p>
            </section>
            <WebSocket/>
            <Footer boat={boat}/>
        </div>
    else
        content =
            <section>
                <h1>404</h1>
            </section>;


    return (
        <div className="inner">
            {content}
        </div>
    )
};

export default Detail;
