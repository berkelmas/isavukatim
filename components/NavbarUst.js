import Link from 'next/link';

function NavbarUst(){
  return(
    <div className="header__middle pt-20">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-3 d-flex align-items-center justify-content-md-start justify-content-center">
                    <div className="header__logo text-center text-md-left mb-20">
                      <Link href="/">
                        <a>
                          <img src="/static/img/isavukatim-logo-kucuk.png" alt="İş Avukatım Logosu"/>
                        </a>
                      </Link>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default NavbarUst;
