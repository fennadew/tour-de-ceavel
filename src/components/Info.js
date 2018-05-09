import React from 'react';
import {data} from  '../data/Data'

class Info extends React.Component {
   render() {
      return (
        <section className="section-margin">
          <div className="position">
            <img className="splash-img" style={{backgroundImage: `url(${data[0].imgUrl})`}}/>
            <div className="her-placement">
              <img src={require('../images/hipster-chick.svg')} />
            </div>
          </div>
          <article>
            <p> Hi I’m Lisa, and I will
              be your tour guide for
              today. Tour de Ceuvel
              will show you about the eco system within de Ceuvel.
            </p>
            <a href="/overview">Het ecosysteem <img className="chev" src={require('../images/chev.svg')} /></a>
          </article>
        </section>
      );
   }
}
export default Info;