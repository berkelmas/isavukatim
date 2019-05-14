function NavbarUst(){
  return(
    <div className="header__middle pt-20">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-3 d-flex align-items-center justify-content-md-start justify-content-center">
                    <div className="header__logo text-center text-md-left mb-20">
                        <a href="index.html">
                            <img src="/static/img/kucuklogo.png" alt="Header Logo"/>
                        </a>
                    </div>
                </div>
                <div className="col-lg-8 col-md-9">
                    <div className="header__add text-center text-md-right mb-20">
                        <a href="#">
                            <img src="/static/img/add/header-add.jpg" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavbarUst;
