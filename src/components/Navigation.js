import React from 'react';

import {data} from "../data/Data";

class Navigation extends React.Component {
    render() {
        return (
            <section>
                <div className="text-blob-container">
                    <img src={require('../images/hipster-chick.svg')} />
                    <h1>Here you can find important pieces of the ecosystem</h1>
                </div>
                <ul>
                    {
                        data.map((obj, i) => {
                            return (
                                <li key={i}>
                                    <a className="navigation-links" style={{backgroundImage: `url(${obj.imgUrl})`}}
                                       href={obj.link}>
                                        <h2>{obj.name}</h2>
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
            </section>
        );
    }
}

export default Navigation;
