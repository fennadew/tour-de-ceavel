import React from 'react';
import {data} from  '../data/Data'

class Info extends React.Component {
   render() {
      return (
        <section className="section-margin">
          <img className="splash-img" style={{backgroundImage: `url(${data[0].imgUrl})`}}/>
          <p> Some awesome content </p>
          <a href="/overview">next</a>
        </section>
      );
   }
}
export default Info;
