import React, { Component } from 'react';
import Tweets from "./components/Tweets";
import Form from "./components/Form";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 left-block">
              <Tweets/>
            </div>
            <div className="col-md-4 right-block">
              <Form/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
