import React from 'react';
import { ReactComponent as BellIcon} from './icons/bell.svg';
import { ReactComponent as MessengerIcon} from './icons/messenger.svg';
import { ReactComponent as CaretIcon} from './icons/caret.svg';
import { ReactComponent as PlusIcon} from './icons/plus.svg';
import { ReactComponent as CogIcon} from './icons/cog.svg';
import { ReactComponent as ChevronIcon} from './icons/chevron.svg';
import { ReactComponent as ArrowIcon} from './icons/arrow.svg';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

function App() {
  return (
    // <div>
    //   <h1>Hello World</h1>
    // </div>
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />
      <NavItem icon={<CaretIcon />} >
        <p>Hello World!</p>
        <DropdownMenu></DropdownMenu>
        </NavItem>
      <NavItem icon="👦" />
    </Navbar>
  );
}

function DropdownMenu() {

  const [activeMenu, setActiveMenu] = useState('main');

  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}

        <span className="icon-right">{props.rightIcon}</span>
        </a>
    );
  }

  return(
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition in={activeMenu === 'main'} unmountOnExit timeouts={500} 
      classNames="menu-primary"
      onEnter={calcHeight}>
        <div className="menu">
      <DropdownItem>My Profile</DropdownItem>
      <DropdownItem
      leftIcon={<CogIcon />}
      rightIcon={<ChevronIcon />}
      goToMenu="settings">Settings
      </DropdownItem>
      <DropdownItem
      leftIcon={<CogIcon />}
      rightIcon={<ChevronIcon />}
      goToMenu="animals">Animals
      </DropdownItem>
      </div>
      </CSSTransition>

      <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeouts={500} 
      classNames="menu-secondary"
      onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main" />
      <DropdownItem>General Settings</DropdownItem>
      <DropdownItem>Post Settings</DropdownItem>
      <DropdownItem>Group Settings</DropdownItem>
      <DropdownItem>Page Settings</DropdownItem>
      <DropdownItem>Friendlist Settings</DropdownItem>
      <DropdownItem>Language Settings</DropdownItem>
      <DropdownItem>Data Settings</DropdownItem>
      <DropdownItem>Privacy Settings</DropdownItem>
      <DropdownItem>Time Settings</DropdownItem>
      </div>
      </CSSTransition>

      <CSSTransition in={activeMenu === 'animals'} unmountOnExit timeouts={500} 
      classNames="menu-secondary"
      onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main" />
      <DropdownItem>bat</DropdownItem>
      <DropdownItem>cat</DropdownItem>
      <DropdownItem>whale</DropdownItem>
      <DropdownItem>dog</DropdownItem>
      <DropdownItem>ant</DropdownItem>
      <DropdownItem>parrot</DropdownItem>
      <DropdownItem>giraffe</DropdownItem>
      <DropdownItem>snake</DropdownItem>
      <DropdownItem>rhino</DropdownItem>
      </div>
      </CSSTransition>

    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> { props.children }</ul>
      </nav>
  );
}

function NavItem(props) {

  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
        </a>

        {open && props.children}
    </li>
  );
}

export default App;
