import React from 'react';
import Footer from './Footer';

class Detail extends React.Component {
    state = {
        boat: ''
    };

    componentDidMount() {
        const {location: {state}} = this.props;
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
                <ul className="facts-list">
                    <li>Data</li>
                    <li className="big">Data</li>
                    <li>Data</li>
                </ul>
                <h2>Description</h2>
                <p>Some random text here we go again this is some awesome text trying to fill it up so we know how much
                    of this sentence will fill the content</p>
                <Footer boat={this.state.boat}/>
            </section>
        );
    }
}

export default Detail;
