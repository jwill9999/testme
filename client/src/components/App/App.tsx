import * as React from 'react';
import Navbar from '../Navbar/Navbar';
import './App.css';

export interface Props {
  children?: React.ReactNode
}

class App extends React.Component<Props> {
  public render() {
    return (
      <div id="wrapper" className="container-fluid" >
        <Navbar />
        {this.props.children}
      </div >
    );
  }
}

export default App;
