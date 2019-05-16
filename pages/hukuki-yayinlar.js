import Head from 'next/head';
import Link from 'next/link';
import TopHeader from '../components/TopHeader';
import NavbarUst from '../components/NavbarUst';
import MenuBar from '../components/MenuBar';
import Footer from '../components/Footer';

import Moment from 'react-moment';
import 'moment/locale/tr';
import fetch from 'isomorphic-unfetch';
import truncateHtml from 'truncate-html';

import getConfig from 'next/config';

function hukukiyayinlar(props) {
  return(
    <div>
      <Head>
        <link rel="stylesheet" href="/static/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="/static/css/fontawesome-all.min.css"/>
        <link rel="stylesheet" href="/static/css/style.css"/>
      </Head>

        <TopHeader/>
        <NavbarUst/>
        <MenuBar/>

      <div className="page-banner-area mt-60">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="page-title-bar text-center pt-60 pb-60 makale-title-bar">
                          <h1>İş Hukuku Yayınlarımız</h1>
                      </div>
                  </div>
              </div>
          </div>
      </div>




      <section className="news-area pt-60 pb-60">

          <div className="container">
              <div className="row">
                  <div className="col-xl-8 col-lg-8 col-md-12">


                  {props.articles.results.map((res, index) =>
                    (
                      <div key={index} className="postbox mb-40">
                          <div className="postbox__thumb mb-25">
                              <a href="#">
                                  <img src="/static/img/hero/part1/hero1.jpg" alt="hero image"/>
                              </a>
                          </div>
                          <div className="postbox__text">
                              <div className="postbox__text-meta pb-20">
                                  <ul>
                                      <li>
                                          <span className="post-cat">
                                              <a href="#">{res.makale_kategori}</a>
                                          </span>
                                      </li>
                                      <li>
                                          <i className="fas fa-calendar-alt"></i>
                                          <span><Moment fromNow>{res.makale_yayintarihi}</Moment></span>
                                      </li>
                                      <li>
                                          <i className="far fa-comment"></i>
                                          <span>(03)</span>
                                      </li>
                                  </ul>
                              </div>
                              <h4 className="title-30 font-600 pr-0">
                                  <a href="#">{res.makale_baslik}</a>
                              </h4>

                                <div className="desc-text mb-20" dangerouslySetInnerHTML={{ __html: truncateHtml(res.makale_mesaj, 1, {byWords : true}) }} />

                              <a href="#" className="read-more">Daha Fazla Oku</a>
                          </div>
                      </div>
                    )
                  )}

                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-12">
                      <div className="widget mb-40">
                          <a href="#">
                              <img src="/static/img/add/add-sidebar.jpg" alt=""/>
                          </a>
                      </div>
                      <div className="widget widget-border mb-40">
                          <h3 className="widget-title">Popüler Yayınlar</h3>

                        {props.popularArticles.results.map((res, index) =>
                          (
                            <div key={index} className="post__small mb-30">
                                <div className="post__small-thumb f-left">
                                    <a href="#">
                                        <img src="/static/img/trendy/xs/xs-1.jpg" alt="hero image"/>
                                    </a>
                                </div>
                                <div className="post__small-text fix pl-10">
                                    <span className="sm-cat">
                                        <a href="#">{res.makale_kategori}</a>
                                    </span>
                                    <h4 className="title-13 pr-0">
                                        <a href="#">{res.makale_baslik}</a>
                                    </h4>
                                    <div className="post__small-text-meta">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span><Moment locale="tr" fromNow>{res.makale_yayintarihi}</Moment></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                          )
                        )}

                      </div>
                      <div className="widget widget-border mb-40">
                          <h3 className="widget-title">En Çok Okunan</h3>
                          <div className="postbox">
                              <div className="postbox__thumb">
                                  <a href="#">
                                      <img src="/static/img/details/sidebar-post.jpg" alt="hero image"/>
                                  </a>
                              </div>
                              <div className="postbox__text pt-15">
                                  <div className="postbox__text-meta pb-10">
                                      <ul>
                                          <li>
                                              <i className="fas fa-calendar-alt"></i>
                                              <span><Moment fromNow>{props.popularArticles.results[0].makale_yayintarihi}</Moment></span>
                                          </li>
                                          <li>
                                              <i className="far fa-comment"></i>
                                              <span>(03)</span>
                                          </li>
                                      </ul>
                                  </div>
                                  <h4 className="title-16 pr-0">
                                      <a href="#">{props.popularArticles.results[0].makale_baslik}</a>
                                  </h4>
                              </div>
                          </div>
                      </div>
                      <div className="widget widget-border mb-40">
                          <h3 className="widget-title">Yayın Türleri</h3>
                          <div className="tagcloud">
                              <Link href="?kategori=kidemtazminati"><a>Kıdem Tazminatı</a></Link>
                              <Link href="?kategori=ihbartazminati"><a>İhbar Tazminatı</a></Link>
                              <Link href="?kategori=iseiadedavasi"><a>İşe İade Davasi</a></Link>
                              <Link href="?kategori=hizmettespitdavasi"><a>Hizmet Tespit Davası</a></Link>
                              <Link href="?kategori=genelsagliksigortasi"><a>Genel Sağlık Sigortası</a></Link>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="row mt-10">
                  <div className="col-xl-12">
                      <div className="pagination">
                          <ul>
                              <li>
                                  {props.articles.previous && <a href={props.kategori ? `?page=${parseInt(props.page)-1}&kategori=${props.kategori}` : `?page=${parseInt(props.page)-1}`}>Önceki</a> }
                              </li>

                              {[...Array(props.articles.totalpages)].map((res, i) =>
                                <li key={i} className={props.page == i+1 && 'active'}>
                                    <a href={props.kategori ? `?page=${i+1}&kategori=${props.kategori}` : `?page=${i+1}`}>
                                        <span>{i+1}</span>
                                    </a>
                                </li>
                              )}

                              <li>
                                  {props.articles.next && <a href={props.kategori ? `?page=${parseInt(props.page)+1}&kategori=${props.kategori}` : `?page=${parseInt(props.page)+1}`}>Sonraki</a> }
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>

      </section>
      <Footer/>

    </div>
  )
}

hukukiyayinlar.getInitialProps = async({query}) => {
      const {publicRuntimeConfig} = getConfig();
      //const resArticles = await fetch(query.kategori ? query.page ? `http://localhost:8000/kategorifilter/?kategori=${query.kategori}&page=${query.page}` : `http://localhost:8000/kategorifilter/?page=${query.page}` : `http://localhost:8000/kategorifilter/` );
      const deneme =  () => {

        if (query.kategori) {
          if (query.page) {

            const resArticles =  fetch(`${publicRuntimeConfig.apiEndpoint}kategorifilter/?kategori=${query.kategori}&page=${query.page}`)
            return resArticles;
          } else {
          const resArticles =  fetch(`${publicRuntimeConfig.apiEndpoint}kategorifilter/?kategori=${query.kategori}`)
          return resArticles;
          }
        } else {
          if (query.page){
            const resArticles =  fetch(`${publicRuntimeConfig.apiEndpoint}kategorifilter/?page=${query.page}`)
            return resArticles;
          } else {
            const resArticles =  fetch(`${publicRuntimeConfig.apiEndpoint}kategorifilter/`)
            return resArticles;
          }
        }

      }
      const resArticles = await deneme();
      const articles = await resArticles.json();

      const resPopular = await fetch(`${publicRuntimeConfig.apiEndpoint}kategorifilter/`);
      const popularArticles = await resPopular.json();

      return ({articles, popularArticles, page: parseInt(query.page) ? query.page : 1, kategori: query.kategori && query.kategori})
  }

export default hukukiyayinlar;
