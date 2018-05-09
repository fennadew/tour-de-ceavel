import React from 'react';
import {data} from  '../data/Data'

class Splash extends React.Component {
   render() {
      return (
        <section>
          <img className="splash-img" style={{backgroundImage: `url(${data[0].imgUrl})`}}/>
          <p> Some awesome content </p>
          <a href="/overview">next</a>
        </section>
      );
   }
}
export default Splash;
