import React from 'react';
import Link from 'next/link';
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
                              <li><Link href="/"><a>Ana Sayfa</a></Link></li>
                              <li><a href="#">Avukata Danışın</a></li>
                              <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle style={{color : 'black', padding: '20px'}} nav caret>
                                  Hukuki İçerikler
                                </DropdownToggle>
                                <DropdownMenu style={{backgroundColor: '#f8f9fa', border: 'none'}} className="submenu" left="true">

                                  <Link href="/hukuki-yayinlar">
                                    <DropdownItem style={{backgroundColor : '#d8d8d8'}} className='custom-dropdown'>
                                      Tümünü Gör
                                    </DropdownItem>
                                  </Link>

                                  <Link href="/hukuki-yayinlar?kategori=kidemtazminati">
                                    <DropdownItem className='custom-dropdown'>
                                      Kıdem Tazminatı
                                    </DropdownItem>
                                  </Link>

                                  <Link href="/hukuki-yayinlar?kategori=ihbartazminati">
                                    <DropdownItem className='custom-dropdown'>
                                      İhbar Tazminatı
                                    </DropdownItem>
                                  </Link>

                                  <Link href="/hukuki-yayinlar?kategori=iseiadedavasi">
                                    <DropdownItem className='custom-dropdown'>
                                      İşe İade Davası
                                    </DropdownItem>
                                  </Link>

                                  <Link href="/hukuki-yayinlar?kategori=hizmettespitdavasi">
                                    <DropdownItem className='custom-dropdown'>
                                      Hizmet Tespit Davaları
                                    </DropdownItem>
                                  </Link>

                                  <Link href="/hukuki-yayinlar?kategori=genelsagliksigortasi">
                                    <DropdownItem className='custom-dropdown'>
                                      Genel Sağlık Sigortası
                                    </DropdownItem>
                                  </Link>

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
