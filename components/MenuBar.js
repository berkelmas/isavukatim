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
                              <li><Link href="/" prefetch><a>Ana Sayfa</a></Link></li>
                              <li><Link href="/avukata-danis" prefetch><a>Avukata Danışın</a></Link></li>
                              <li><Link href="/hukuki-yayinlar/kategori/kidemtazminati" prefetch><a>Kıdem Tazminatı</a></Link></li>
                              <li><Link href="/hukuki-yayinlar/kategori/ihbartazminati" prefetch><a>İhbar Tazminatı</a></Link></li>
                              <li><Link href="/hukuki-yayinlar/kategori/iseiadedavasi" prefetch><a>İşe İade</a></Link></li>
                              <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle style={{color : 'black', padding: '20px'}} nav caret>
                                  Yayınlar
                                </DropdownToggle>
                                <DropdownMenu style={{backgroundColor: '#f8f9fa', border: 'none'}} className="submenu" left="true">

                                  <Link href="/hukuki-yayinlar" prefetch>
                                    <a style={{backgroundColor : '#d8d8d8'}} className='custom-dropdown'>
                                      Tümünü Gör
                                    </a>
                                  </Link>

                                  <Link href="/hukuki-yayinlar/kategori/kidemtazminati">
                                    <a className='custom-dropdown'>
                                      Kıdem Tazminatı
                                    </a>
                                  </Link>

                                  <Link href="/hukuki-yayinlar/kategori/ihbartazminati">
                                    <a className='custom-dropdown'>
                                      İhbar Tazminatı
                                    </a>
                                  </Link>

                                  <Link href="/hukuki-yayinlar/kategori/iseiadedavasi">
                                    <a className='custom-dropdown'>
                                      İşe İade Davası
                                    </a>
                                  </Link>

                                  <Link href="/hukuki-yayinlar/kategori/hizmettespitdavasi">
                                    <a className='custom-dropdown'>
                                      Hizmet Tespit Davaları
                                    </a>
                                  </Link>

                                  <Link href="/hukuki-yayinlar/kategori/genelsagliksigortasi">
                                    <a className='custom-dropdown'>
                                      Genel Sağlık Sigortası
                                    </a>
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
