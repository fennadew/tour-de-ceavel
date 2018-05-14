import React, { Component } from 'react';
import SockJS  from 'sockjs-client';
import Stomp from '@stomp/stompjs';

let client;

const endpoints = {
    'Greenhouse': '/exchange/power/00',
    'Metabolic lab': '/exchange/power/A0',
    'Urban biorefinery': '/exchange/power/02',
    'Biogasboat': '/exchange/power/B0',
    'Cafe de Ceuvel': '/exchange/power/C0',
    'Community': '/exchange/power/01',
};

class WebSocket extends Component {
    state = {
        subscription: null
    };

    componentDidMount() {
            this.setupWebSocket();
    }
    componentWillUnmount() {
        if(this.state.subscription) {
            this.state.subscription.unsubscribe();
        }
    }

    setupWebSocket = () => {
        const socket = SockJS('https://app.jouliette.net/stomp/');
        client = Stomp.over(socket);
        client.connect('web', 'mnwdTGgQu5zPmSrz', this.connect, console.error, '/');
    };
    update = (d) => {
        const data = JSON.parse(d.body);
        this.props.streamCallback(data);
        };

    connect = () => {
        const endpoint = endpoints[this.props.boat.name];
        this.state.subscription = client.subscribe(endpoint, this.update);
    };
    render() {
        return (
                <span></span>
        );
    }
}
export default WebSocket;
