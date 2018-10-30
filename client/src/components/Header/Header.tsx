import * as React from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import './Header.css';

interface Props {
  name?: string
}

interface Istate {
  collapsed: boolean
}

export default class Header extends React.Component<Props, Istate> {
  constructor(props: Props) {
    super(props);


    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  public toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  public render() {
    return (
      <React.Fragment>
        <Navbar color="primary" light={true}>
          <NavbarBrand href="/" className="mr-auto">{this.props.name}</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar={true}>
            <Nav navbar={true}>
              <NavItem>
                <NavLink href="/page">Page</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }

}


