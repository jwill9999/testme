import * as React from 'react';
import Header from '../Header/Header'
import './App.css';

export interface Props {
  children?: React.ReactNode
}

class App extends React.Component<Props> {
  public render() {
    return (
      <div id="wrapper" className="container-fluid" >
        <Header name="TestMe" />
        {this.props.children}
      </div >
    );
  }
}

export default App;
