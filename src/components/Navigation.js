import React from 'react';

import {data} from "../data/Data";

class Navigation extends React.Component {
  render() {
    return (
      <ul>
          {
            data.map((obj, i) => {
            return (
                <li key={i}>
                    <a className="navigation-links" style={{backgroundImage: `url(${obj.imgUrl})`}} href={obj.link}>
                        <h1>{obj.name}</h1>
                    </a>
                </li>
            );
          })
          }
    </ul>
  );
  }
}
export default Navigation;
