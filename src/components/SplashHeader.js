import React from 'react'

class SplashHeader extends React.Component {
   render() {
      return (
        <header>
            <a href="/overview"><img className="splash logo" src={require('../images/deceuvel-logo.svg')} /></a>
        </header>
      );
   }
}
export default SplashHeader;
