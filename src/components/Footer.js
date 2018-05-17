import React from 'react';

import {Link} from 'react-router-dom';

class Footer extends React.Component {
   render() {
      return (
        <footer className="detail-footer">
          <nav>
            <ul>
              <li>
                <Link style={{backgroundImage: `url(${this.props.boat.previousImgUrl})`}} to={`${process.env.PUBLIC_URL}`+ this.props.boat.previousLink}>{this.props.boat.previousName}</Link>
              </li>
              <li>
                <Link style={{backgroundImage: `url(${this.props.boat.nextImgUrl})`}} to={`${process.env.PUBLIC_URL}`+ this.props.boat.nextLink}>{this.props.boat.nextName}</Link>
              </li>
            </ul>
          </nav>
        </footer>
      );
   }
}
export default Footer;
