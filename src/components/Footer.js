import React from 'react';

import {Link} from 'react-router-dom';

class Footer extends React.Component {
   render() {
      return (
        <footer>
          <nav>
            <ul>
              {/*<li>*/}
                {/*<Link to={this.props.boat.previousLink}>{this.props.boat.previousName}</Link>*/}
              {/*</li>*/}
              {/*<li>*/}
                {/*<a href={this.props.boat.nextLink}>{this.props.boat.nextName}</a>*/}
              {/*</li>*/}
            </ul>
          </nav>
        </footer>
      );
   }
}
export default Footer;
