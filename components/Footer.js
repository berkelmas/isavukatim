function Footer() {
  return(
    <footer className="footer-bg">
        <div className="subscribe-area pt-100 pb-80">
            <div className="container">
                <div className="subscribe-separator pt-50 pb-20">
                    <div className="row">
                        <div className="col-xl-2 col-lg-12">
                            <div className="footer-logo mb-30">
                                <a href="#"><img src="/static/img/kucuklogo.png" alt=""/></a>
                            </div>
                        </div>
                        <div className="col-xl-10 col-lg-12">
                            <div className="row">
                                <div className="col-xl-7 col-lg-7">
                                    <div className="subscribe-title">
                                        <h2>Bültenİmİze Abone Olun</h2>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5">
                                    <div className="subscribe-form mb-30">
                                        <form action="#">
                                            <input type="email" placeholder="Email Adresinizi Girin"/>
                                            <button type="submit">
                                                Abone Ol
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom-area pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="footer-widget mb-30">
                            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising
                                pain was born and I will give you
                                a complete account of the system, and expound the actual teachings of the great explorer of
                                the truth, the master-builder
                                of human happiness.</p>
                            <div className="footer-social">
                                <a className="facebook" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="twitter" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="instagram" href="#"><i className="fab fa-instagram"></i></a>
                                <a className="dribbble" href="#"><i className="fab fa-dribbble"></i></a>
                                <a className="pinterest" href="#"><i className="fab fa-pinterest-p"></i></a>
                                <a className="google-plus" href="#"><i className="fab fa-google-plus-g"></i></a>
                                <a className="pinterest" href="#"><i className="fab fa-pinterest-p"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="widget-box mb-30">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3">
                                    <div className="footer-widget mb-30">
                                        <h3>Quick Link</h3>
                                        <ul>
                                            <li><a href="#">Politic</a></li>
                                            <li><a href="#">Travel</a></li>
                                            <li><a href="#">Study</a></li>
                                            <li><a href="#">Country</a></li>
                                            <li><a href="#">Sports</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3">
                                    <div className="footer-widget mb-30">
                                        <h3>Most Visited</h3>
                                        <ul>
                                            <li><a href="#">Latest News </a></li>
                                            <li><a href="#">Most Visited</a></li>
                                            <li><a href="#">Recent News</a></li>
                                            <li><a href="#">International</a></li>
                                            <li><a href="#">Entertainment</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3">
                                    <div className="footer-widget mb-30">
                                        <h3>About Us</h3>
                                        <ul>
                                            <li><a href="#">Feature</a></li>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Life Style</a></li>
                                            <li><a href="#">Economic</a></li>
                                            <li><a href="#">Business</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3">
                                    <div className="footer-widget pt-50 mb-30">
                                        <ul>
                                            <li><a href="#"><i className="fas fa-video"></i> Video</a></li>
                                            <li><a href="#"><i className="fas fa-camera-retro"></i> Picture</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
