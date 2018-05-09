import React from 'react';

class Splash extends React.Component {
   render() {
      return (
        <section className = 'fadeIn'>
          <img src="http://via.placeholder.com/350x150.jpg"/>
          <p> Some awesome content </p>
          <a href="/overview">next</a>
        </section>
      );
   }
}
export default Splash;
