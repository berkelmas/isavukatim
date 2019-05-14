import React from 'react';
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
  DropdownItem } from 'reactstrap';

class MenuBar extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      clickedDropdown: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render(){
    return(
        <div className="grey-bg">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 header__menu header__menu-black">
                        <Navbar color="light" light expand="md">
                          <NavbarToggler className="ml-auto float-sm-right" onClick={this.toggle} />
                          <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                              <li><a href="#">Ana Sayfa</a></li>
                              <li><a href="#">Avukata Danışın</a></li>
                              <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle style={{color : 'black', padding: '20px'}} nav caret>
                                  Hukuki İçerikler
                                </DropdownToggle>
                                <DropdownMenu style={{backgroundColor: '#f8f9fa', border: 'none'}} className="submenu" left="true">
                                <DropdownItem style={{backgroundColor : '#d8d8d8'}} className='custom-dropdown'>
                                  Tümünü Gör
                                </DropdownItem>
                                  <DropdownItem className='custom-dropdown'>
                                    Kıdem Tazminatı
                                  </DropdownItem>
                                  <DropdownItem className='custom-dropdown'>
                                    İhbar Tazminatı
                                  </DropdownItem>
                                  <DropdownItem className='custom-dropdown'>
                                    İşe İade Davası
                                  </DropdownItem>
                                  <DropdownItem className='custom-dropdown'>
                                    Hizmet Tespit Davaları
                                  </DropdownItem>
                                  <DropdownItem className='custom-dropdown'>
                                    Genel Sağlık Sigortası
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </Nav>
                          </Collapse>
                        </Navbar>
                    </div>
                </div>
            </div>
        </div>
      )
    }
}

export default MenuBar;
