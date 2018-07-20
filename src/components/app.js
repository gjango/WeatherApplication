import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="navbar" id="navbar">
          <nav className="navbar navbar-lg navbar-light bg-blue">
              <a className="navbar-brand" href="#"><img src="/src/icons/rainbow.png" width="40" height="40" className="d-inline-block align-top" alt=""/>
                Weather</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-item nav-link active" href="#">თბილისი </a>
                  <a className="nav-item nav-link" href="#">ქუთაისი</a>
                  <a className="nav-item nav-link" href="#">ბათუმი</a>
                  <a className="nav-item nav-link" href="#">ზუგდიდი</a>
                </div>
              </div>
            </nav>
            <div className="container" >React simple starter</div>
            </div>
            

      </div>

      
    );
  }
}
