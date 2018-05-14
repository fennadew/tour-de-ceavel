import React, { Component } from 'react';
import SockJS  from 'sockjs-client';
import Stomp from '@stomp/stompjs';
const socket = new SockJS('https://app.jouliette.net/stomp/');
const client = Stomp.over(socket);

class WebSocket extends React.Component {
    state = {
    };

    componentDidMount() {
        this.setupWebSocket();
    }
    setupWebSocket = () => {
        client.connect('web', 'mnwdTGgQu5zPmSrz', this.connect, console.error, '/');
    }
    connect = () => {
        client.subscribe('/exchange/power/#');
    }
    render() {
        return (
                <span></span>
        );
    }
}
export default WebSocket;
