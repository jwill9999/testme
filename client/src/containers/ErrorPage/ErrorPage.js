// @flow

import * as React from "react";
import "./errorPage.css";
import { connect } from "react-redux";
import {} from "../../actions";

type Props = {};

type State = {};

export class ErrorPage extends React.Component<Props, State> {
  render() {
    return <h1>Error Page</h1>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorPage);
