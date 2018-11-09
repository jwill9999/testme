// @flow

import * as React from "react";
import "./question.css";
import { connect } from "react-redux";
import {} from "../../actions";

type Props = {};

type State = {};

export class Question extends React.Component<Props, State> {
  render() {
    return <h1>Questions</h1>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);
