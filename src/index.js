import React from 'react';
import ReactDOM from 'react-dom';
import materialze from 'materialize-css';
import './styles.css';

class Home extends React.Component {
    render() {
        return (
        <div className="container">
        <nav>
            <div className="nav-wrapper">
                <a href="https://dimewebsite.herokuapp.com/" className="brand-logo">Dime</a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li><a>About</a></li>
                    <li><a>FAQs</a></li>
                    <li><a>Contact</a></li>
                    <li><a>Log In</a></li>
                </ul>
            </div>
        </nav>
            <div className="row">
                <div className="col s12">
                    <h1 className="center-align">DIME.</h1>
                    <h3 className="center-align">Just Give A Dime</h3>
            <hr />
                <div>
                    <h4>Mission Statement</h4>
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
