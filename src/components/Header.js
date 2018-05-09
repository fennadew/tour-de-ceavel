import React from 'react'

class Header extends React.Component {
   render() {
      return (
        <header>
            <a className="header-links info" href="/info">Info</a>
            <a href="/overview"><img className="logo" src={require('../images/deceuvel-logo.svg')} /></a>
            <a className="header-links map" href="/map">Map</a>
        </header>
      );
   }
}
export default Header;
