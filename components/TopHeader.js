function TopHeader() {
  return(
    <div className="header__top-area grey-bg">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="header__top-menu top-menu-black">
                        <ul>
                            <li>
                                <a href="#">Hakkımızda </a>
                            </li>
                            <li>
                                <a href="#">Gizlilik Politikası</a>
                            </li>
                            <li>
                                <a href="#">Bize Ulaşın</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="header__social header-social-black text-center text-md-right mt-10">
                        <a href="#">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopHeader;
