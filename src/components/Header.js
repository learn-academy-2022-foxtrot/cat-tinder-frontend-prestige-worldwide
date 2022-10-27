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

import Memer from '../Memer-Logo.png'
import { useState } from 'react';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (

        <div data-testid='testHeaderNav' className='header-container'>
            <Navbar >
                <div className='navBrand'>
                    <NavbarBrand href="/" >
                        <img src={Memer} />
                        <h1 className='logo-text'>Powered by Prestige Worldwide</h1>
                    </NavbarBrand>
                </div>
                <div className='collapse-container'>
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
                        <NavbarText>Feed your meme hunger</NavbarText>
                    </Collapse>
                </div>
            </Navbar>

        </div>
    )
}

export default Header