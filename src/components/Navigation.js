import React from 'react';
import { Link } from 'react-router-dom';

import { data } from "../data/Data";

class Navigation extends React.Component {

    render() {
        return (
            <section>
                <div className="text-blob-container">
                    <img src={require('../images/hipster-chick.svg')} />
                    <h1>Here you can find important pieces of the ecosystem</h1>
                </div>
                <ul className="navigation-container">
                    {
                        data.map((obj, i) => {
                            return (
                                <li key={i}>
                                    <Link to={obj.link}  className="hexagon" style={{backgroundImage: `url(${obj.imgUrl})`}}>
                                        <h2>{obj.name}</h2>
                                    </Link>
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
