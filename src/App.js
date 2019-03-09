import React, { Component } from 'react'; 
import Container from './components/layout/Container';

export default class App extends Component {
  render() {
    const { children } = this.props;
    return <Container body={children} />
  }

}
