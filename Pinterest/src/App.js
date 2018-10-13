import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import {withRouter} from 'react-router-dom'
export default withRouter (connect(mapStateProps)(App))
class App extends Component {
 /* constructor (props) {
    super(props);
    this.state = {
      normaNumber: 1
    };
  }
  handleClick = (event) => {
    event.preventDefault();
    console.log('click');
  
    this.setState((prevState) => {
      return {
        normalNumber: prevState.normalNumber + this.props.magicNumber
      };
    });
  } */

  render() {
    return (
    <div className="App">
      <Header> title ={[]}</Header>
      <Content/>
    </div>
    );
  }
}
export default App;