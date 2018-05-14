import React from 'react'

class Header extends React.Component {
   render() {
       const { pathname } = {...this.props};
      return (
        <header>
            {pathname.includes("/overview/") ? <a className="header-links back" href="/overview">back</a> : <a className="header-links info" href="/info">Info</a>}
            <a href="/overview"><img className="logo" src={require('../images/deceuvel-logo.svg')} /></a>
            <a className="header-links map" href="/map">Map</a>
        </header>
      );
   }
}
export default Header;
