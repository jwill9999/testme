import * as React from 'react';
import './Home.css';

// tslint:disable-next-line:no-empty-interface
interface IProps {
}

const Home: React.SFC<IProps> = (props) => (
  <div id="Home" className="container">
    <h1>Home Component</h1>
  </div>
);

export default Home;