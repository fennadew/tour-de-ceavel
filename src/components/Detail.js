import React from 'react';
import Footer from './Footer';

class Detail extends React.Component {
    state = {
        boat: ''
    };
    componentDidMount() {
        const { location: { state } } = this.props;
        this.setState({
            boat: state.obj
        });
    }

    render() {
        return (
            <section>
                <div className="hexagon detail-hexagon" style={{backgroundImage: `url(${this.state.boat.imgUrl})`}}>
                    <h1>{this.state.boat.name}</h1>
                </div>
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

export default Detail;
