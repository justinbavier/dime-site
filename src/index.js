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

