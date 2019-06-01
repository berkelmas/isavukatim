import Link from 'next/link';

function Footer() {
  return(
    <footer className="footer-bg">
        <div className="subscribe-area pt-100 pb-80">
            <div className="container">
                <div className="subscribe-separator pt-50 pb-20">
                    <div className="row">
                        <div className="col-xl-2 col-lg-12">
                            <div className="footer-logo mb-30">
                                <a href="#"><img src="/static/img/isavukatim-logo-beyaz-kucuk.png" alt=""/></a>
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
                <div className="row d-flex justify-content-between">
                    <div className="col-xl-4">
                        <div className="footer-widget mb-30">
                            <p>isavukatim.com hem avukatlara hem işçi-işveren tarafı gerçek ve tüzel kişilere yardımcı olmak ve hukuki yönlendirmeler yapmak amacıyla 2018 yılında kurulmuştur. Gerek İş Kanunu gerek ilgili mevzuatlar ve içtihatlar çerçevesinde size en doğru şekilde hukuki destek olmayi ilke haline getirmiştir.</p>
                            <div className="footer-social">
                                <a className="facebook" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="twitter" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="instagram" href="#"><i className="fab fa-instagram"></i></a>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="widget-box mb-30">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12">
                                    <div className="footer-widget mb-30">
                                        <h3>Yayın Kategorileri</h3>
                                        <ul>
                                            <li><Link href="/hukuki-yayinlar"><a>Tüm Makaleler</a></Link></li>
                                            <li><Link href="/hukuki-yayinlar/kategori/kidemtazminati"><a>Kıdem Tazminatı</a></Link></li>
                                            <li><Link href="/hukuki-yayinlar/kategori/ihbartazminati"><a>İhbar Tazminatı</a></Link></li>
                                            <li><Link href="/hukuki-yayinlar/kategori/genelsagliksigortasi"><a>Genel Sağlık Sigortası</a></Link></li>
                                            <li><Link href="/hukuki-yayinlar/kategori/iseiadedavasi"><a>İşe İade Davası</a></Link></li>
                                            <li><Link href="/hukuki-yayinlar/kategori/hizmettespitdavasi"><a>Hizmet Tespit Davası</a></Link></li>
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
