import React from 'react';
import Footer from './Footer';

import {data} from '../data/Data';

const Detail = (props) => {
    const boat = data.find(b => b.link === props.match.url);
    let content;

    if (boat)
        content =
            <section>
                <div className="hexagon detail-hexagon" style={{backgroundImage: `url(${boat.imgUrl})`}}>
                    <h1>{boat.name}</h1>
                </div>
                <ul className="facts-list">
                    <li>Data</li>
                    <li className="big">Data</li>
                    <li>Data</li>
                </ul>
                <h2>Description</h2>
                <p>Some random text here we go again this is some awesome text trying to fill it up so we know how much
                    of this sentence will fill the content</p>
                <Footer boat={boat}/>
            </section>;
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


