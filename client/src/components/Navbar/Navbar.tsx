import * as React from 'react';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,

} from 'reactstrap';

interface Props {

}

interface State {
  isOpen: boolean
}

export default class Example extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  public toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  public render() {
    return (
      <React.Fragment>
        <Navbar className="mb-5" color="primary" light={true} expand="md">
          <NavbarBrand className="ml-5" href="/">TestMe</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar={true}>
            <Nav className="ml-auto pr-5" navbar={true}>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/page">Page</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

