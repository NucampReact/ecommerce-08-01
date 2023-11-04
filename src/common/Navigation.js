import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';
import handshake from '../images/handshake.png';
import { NavLink as ReactRouterNavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Navigation(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const dispatcher = useDispatch();

  const cartItems = useSelector(state => state.cart);

  const removeFromCart = (itemToRemove) => {
    const action = {
      type: 'REMOVE_FROM_CART',
      removedItem: itemToRemove
    }

    dispatcher(action)
  }

  return (
    <div className="mb-3">
      <Navbar color="dark" dark expand="xs">
        <NavbarBrand href="/">
          <img src={handshake} width="100" />
          Trader's Terrace
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="container-fluid" navbar>
            <NavItem>
              <NavLink tag={ReactRouterNavLink} to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactRouterNavLink} to="/shop">Shop</NavLink>
            </NavItem> 
            <NavItem className="ms-auto" tag="nav">
            <UncontrolledDropdown nav>
              <DropdownToggle caret>
                <i className="fa fa-solid fa-user" />&nbsp; Shopper Sam
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Profile</DropdownItem>
                <DropdownItem>
                  My Cart ({cartItems.length})
                  {cartItems.map(item => {
                    return <div>
                        <span className="ms-2" key={item.id}>{item.title}</span>
                        <Button onClick={() => removeFromCart(item)} color="danger" size='sm'>X</Button>
                      </div>
                  })}
                </DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Sign Out</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;