# Cafe de Ceuvel
[The App](https://fennadew.github.io/tour-de-ceuvel/)

With `This` app an user can make his own tour in De Ceuvel providing information about the ecosystem and different boats that are connected with each other, using real time data.

<div width="75px">
  <img src="tour-de-ceuvel.gif" alt="">
</div>

# Table of Content
- [Getting started](#getting-started)
- [Features](#features)
- [Used technology](#used-technology)
- [Data](#data)

# Getting Started
How to get started with this project:

1. Clone the repo with `git clone https://github.com/fennadew/tour-de-ceuvel` or download it from github
2. Run `npm install` or `yarn` to install the dependencies
3. Run `npm start` to start the server
4. Go to [http://localhost:3000/](http://localhost:3000/)

# Features
The following is possible with this application:

- The user can follow a tour.
- The user sees life data through the app.

# Used Technology
The following is used in this project:

- [React] A JavaScript library for building user interfaces
- [SockJS] SockJS is a browser JavaScript library that provides a WebSocket-like object
- [StompJS] This library provides a STOMP client for Web browser (using Web Sockets) or node.js applications (either using raw TCP sockets or Web Sockets).

# Data
Cleaning the data and maths
```JavaScript
state = {
    heatPumpActive: false,
    productionActive: false,
    productionStatus: "green",
    data: {}
}
getWebSocketData = (data) => {
    let heatPumpActive = false;
    let productionActive = false;
    let productionStatus;
    if (data.heatpump) {
        heatPumpActive = true
        data.heatpump = Math.round(data.heatpump * 100) /100

    }

    if (data.solar) {
        productionActive = true;
        let newSolar = -1 * data.solar
        data.solar = Math.round(newSolar * 100) /100

        let heatpump = data.heatpump ? data.heatpump : 0;
        let diff = newSolar - (data.consumption + heatpump);
        if (diff > 0) {
            productionStatus = "green";
        } else {
            productionStatus = "red";
        }
    }
    else {
        productionStatus = "red";
    }

    data.consumption = Math.round(data.consumption * 100 ) / 100

    this.setState({
        data,
        heatPumpActive,
        productionActive,
        productionStatus
    });
};
```

Realtime data small example:  
```JavaScript
<span className={this.state.heatPumpActive ? "left" : "left hidden"}>{this.state.data.heatpump}W</span>
<span className={this.state.productionActive ? "center" : "center hidden"}>{this.state.data.solar}W</span>
<span className={"right"}>{this.state.data.consumption}W</span>
```

[SockJS]: https://github.com/sockjs/sockjs-client
[React]: https://reactjs.org/
[StompJS]: https://www.npmjs.com/package/stompjs

## Lisence
Copyright © 2018 Sam Guliker & Fenna de Wilde. Released under the [MIT license](https://opensource.org/licenses/MIT)
