import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';

import { useState } from 'react';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (

        <div className='header-container'>


            <Navbar >

                <NavbarBrand href="/" >
                    <h1 className='logo-text'>Prestige WorldWide Memes</h1>
                </NavbarBrand>

                <br></br>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/index">Show</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/new">Add Memes</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>The Memes in the world</NavbarText>
                </Collapse>
            </Navbar>


        </div>
    )
}

export default Header