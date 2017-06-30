import React from 'react';
import ReactDOM from 'react-dom';
import materialze from 'materialize-css';
import './styles.css';

class Home extends React.Component {
    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <h1 className="center-align">DIME.</h1>
                    <h3 className="center-align">Just Give A Dime</h3>
            <hr />
                <div>
                    <h3>Mission Statement</h3>
                    <p>Our goal is to seamlessly incorporate charitable donations
                    into people's daily lives. In doing so we hope to set the new
                    standard for how charitable donations are collected. We
                    believe making substantial charitable donations is an achievable
                    goal through nominal daily contributions that add up over time.</p>
                </div>
                </div>
            </div>
        </div>
        )
    }
}

ReactDOM.render(
    <Home />,
    document.getElementById('root')
);
