import * as React from 'react';
import './NotFound.css';


export interface Props {
  location?: {
    pathname: string
  }
}

export default function NotFound(props: Props) {
  console.log(props)
  return (
    <div id="errorPage" className="container">
      <h1>Page not found</h1>
    </div>
  );
}
