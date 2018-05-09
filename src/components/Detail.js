import React from 'react';
import Footer from './Footer';

class Navigation extends React.Component {
   render() {
      return (
        <section>
          <ul>
            <li>Data</li>
            <li>Data</li>
            <li>Data</li>
          </ul>
          <p>Beschrijving voor het onderwerp</p>
          <p>Nog meer text om het een beetje op te vullen</p>
          <Footer/>
        </section>
      );
   }
}
export default Navigation;
