import React from 'react';
import {
  Nav,
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
                  {/* ask/find out how to toggle 'disabled' attribute on a component */}
                  <DropdownItem>BellyImg One</DropdownItem>
                  <DropdownItem>BellyImg Two</DropdownItem>
                  <DropdownItem>BellyImg Three</DropdownItem>
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
          <Link className="navbar-brand" to="/">Belly Up</Link>
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
