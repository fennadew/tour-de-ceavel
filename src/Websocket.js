import React, { Component } from 'react';
import SockJS  from 'sockjs-client';
import Stomp from '@stomp/stompjs';

let client;

const endpoints = {
    'all':           '/exchange/power/#',
    'Main meter':    '/exchange/power/00',
    'Metabolic lab': '/exchange/power/A0',
    'Tech boat':     '/exchange/power/A1',
    'Crossboat':     '/exchange/power/B0',
    'Cafe':          '/exchange/power/C0',
    'Boat 1':        '/exchange/power/01',
    'Boat 2':        '/exchange/power/02',
    'Boat 3':        '/exchange/power/03',
    'Boat 4':        '/exchange/power/04',
    'Boat 5':        '/exchange/power/05',
    'Boat 6':        '/exchange/power/06',
    'Boat 7':        '/exchange/power/07',
    'Boat 8':        '/exchange/power/08',
    'Boat 9':        '/exchange/power/09',
    'Boat 10':       '/exchange/power/10',
    'Boat 11':       '/exchange/power/11',
    'Boat 12':       '/exchange/power/12',
    'Boat 13':       '/exchange/power/13',
    'Boat 14':       '/exchange/power/14'
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
        console.log(client);

    };

    connect = () => {
        this.state.subscription = client.subscribe('/exchange/power/#');
    };
    render() {
        return (
                <span></span>
        );
    }
}
export default WebSocket;
