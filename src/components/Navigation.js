import React from 'react'

class Navigation extends React.Component {
  render() {
    return (
      <ul>
      <li>
        <a className="navigation-links" href="/detail">
          <h1>Biogasboot</h1>
          <div class="hexTop"></div>
          <div class="hexBottom"></div>
        </a>
      </li>
      <li>
        <a className="navigation-links" href="#">
          <h1>Metabolic lab</h1>
          <div class="hexTop"></div>
          <div class="hexBottom"></div>
        </a>
      </li>
      <li>
        <a className="navigation-links" href="#">
          <div class="hexTop"></div>
          <div class="hexBottom"></div>
        </a>
      </li>
      <li>
        <a className="navigation-links" href="#">
          <div class="hexTop"></div>
          <div class="hexBottom"></div>
        </a>
      </li>
      <li>
        <a className="navigation-links" href="#">
          <div class="hexTop"></div>
          <div class="hexBottom"></div>
        </a>
      </li>
      <li>
        <a className="navigation-links" href="#">
          <h1>Metabolic lab</h1>
          <div class="hexTop"></div>
          <div class="hexBottom"></div>
        </a>
      </li>
    </ul>);
  }
}
export default Navigation;
