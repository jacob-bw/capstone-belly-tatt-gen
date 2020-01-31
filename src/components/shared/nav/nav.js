import React from 'react';
import {
  Nav,
  NavbarBrand,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';

import './nav.scss';

class MyNav extends React.Component {
  static propTypes= {
    authed: PropTypes.bool,
    dropdownOpen: PropTypes.bool,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    const buildNavbar = () => {
      if (authed) {
        return (
          <div className="navbar-nav ml-auto">
            <Nav pills>
              <UncontrolledDropdown >
                <DropdownToggle id="bellyMenu" nav caret>
                  Choose New Belly
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem className="belly1" id="belly1">BellyImg One</DropdownItem>
                  <DropdownItem className="belly2" id="belly2">BellyImg Two</DropdownItem>
                  <DropdownItem className="belly3" id="belly3">BellyImg Three</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link className="nav-link" to="/saved"><FontAwesomeIcon id="saveBtn" icon={faBook}/></Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link logoutBtn" to="/home" onClick={this.logMeOut}><FontAwesomeIcon id="logoutBtn" icon={faGooglePlusSquare}/></Link>
              </NavItem>
            </Nav>
          </div>
        );
      }

      return (<ul className="navbar-nav ml-auto"></ul>);
    };

    return (
      <div className="MyNavbar">
        <nav className="navbar navbar-expand-lg navbar-light">
          <NavbarBrand href="/home" className="mr-auto">Belly Up</NavbarBrand>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            { buildNavbar() }
          </div>
        </nav>
      </div>
    );
  }
}

export default MyNav;
