import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
   render() {
       const { pathname } = {...this.props};
      return (
        <header>
            {pathname.includes("/overview/") ? <Link className="header-links back" to="/overview">back</Link> : <Link className="header-links info" to="/info">Info</Link>}
            <Link to="/overview"><img className="logo" src={require('../images/deceuvel-logo.svg')} /></Link>
            <Link className="header-links map" to="/map">Map</Link>
        </header>
      );
   }
}
export default Header;
