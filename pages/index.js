import Head from 'next/head';
import React from 'react';
import Moment from 'react-moment';
import 'moment/locale/tr';

import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';

import Footer from '../components/Footer';
import TopHeader from '../components/TopHeader';
import NavbarUst from '../components/NavbarUst';
import MenuBar from '../components/MenuBar';

class index extends React.Component {
  static async getInitialProps(){
    const {publicRuntimeConfig} = getConfig();

    // gets the last 6 articles
    const res = await fetch(`${publicRuntimeConfig.apiEndpoint}makalesixitem`);
    const result = await res.json();
    const articles = result.results;

    // gets the kidem tazminati articles
    const resKidem= await fetch(`${publicRuntimeConfig.apiEndpoint}kategorifilter?kategori=kidemtazminati`);
    const resultKidem = await resKidem.json();
    const articlesKidem = resultKidem.results;

    // gets the ise iade davasi articles
    const resIseiade = await fetch(`${publicRuntimeConfig.apiEndpoint}kategorifilter?kategori=iseiadedavasi`);
    const resultIseiade = await resIseiade.json();
    const articlesIseiade = resultIseiade.results;

    // gets genel saglik sigortasi articles
    const resGenelsaglik = await fetch(`${publicRuntimeConfig.apiEndpoint}kategorifilter?kategori=genelsagliksigortasi`);
    const resultGenelsaglik = await resGenelsaglik.json();
    const articlesGenelsaglik = resultGenelsaglik.results;

    // gets ihbar tazminati articles
    const resIhbartazminati = await fetch(`${publicRuntimeConfig.apiEndpoint}kategorifilter?kategori=ihbartazminati`);
    const resultIhbartazminati = await resIhbartazminati.json();
    const articlesIhbartazminati = resultIhbartazminati.results;

    return {articles, articlesKidem, articlesIseiade, articlesGenelsaglik, articlesIhbartazminati};
  }

  render() {
    return(
      <div>
        <Head>
          <title>İş Avukatından İş Hukuku</title>
          <link rel="stylesheet" href="/static/css/bootstrap.min.css"/>
          <link rel="stylesheet" href="/static/css/fontawesome-all.min.css"/>
          <link rel="stylesheet" href="/static/css/style.css"/>
          <script dangerouslySetInnerHTML={{ __html:`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();(function(){var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];s1.async=true;
            s1.src='https://embed.tawk.to/5cb4a0c1c1fe2560f3feed5f/default';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
            `}}/>
        </Head>
        <header className="header">
          <TopHeader/>
          <NavbarUst/>
          <MenuBar/>
        </header>


        <main>
          <br/>

          {/* HERO SECTION */}
            <section className="hero-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="hero pos-relative mb-30">
                                <div className="hero__thumb" data-overlay="dark-gradient">
                                    <a href="#"><img src={'/static/img/hero/part1/hero1.jpg'} alt="hero image"/></a>
                                </div>
                                <div className="hero__text">
                                    <span className="post-cat mb-10"><a href="#">{this.props.articles[0].makale_kategori}</a></span>
                                    <h3 className="pr-100"><a href="#">{this.props.articles[0].makale_baslik}</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="hero pos-relative mb-30">
                                <div className="hero__thumb" data-overlay="dark-gradient">
                                    <a href="#">
                                        <img src="/static/img/hero/part1/hero2.jpg" alt="hero image"/>
                                    </a>
                                </div>
                                <div className="hero__text hero__text-small">
                                    <span className="post-cat mb-10">
                                        <a href="#">{this.props.articles[1].makale_kategori}</a>
                                    </span>
                                    <h3 className="pr-0">
                                        <a href="#">{this.props.articles[1].makale_baslik}</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="hero pos-relative mb-30">
                                <div className="hero__thumb" data-overlay="dark-gradient">
                                    <a href="#">
                                        <img src="/static/img/hero/part1/hero3.jpg" alt="hero image"/>
                                    </a>
                                </div>
                                <div className="hero__text hero__text-small">
                                    <span className="post-cat mb-10">
                                        <a href="#">{this.props.articles[2].makale_kategori}</a>
                                    </span>
                                    <h3 className="pr-0">
                                        <a href="#">{this.props.articles[2].makale_baslik}</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="news-area pt-30 pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title mb-30">
                                <h2>Güncel Haberler</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row row-10">
                        <div className="col-20">

                          {this.props.articlesKidem.map((articleKidem, index) => {
                            if (index < 3) {
                                return (
                                  <div key={index} className="postbox mb-25">
                                      <div className="postbox__thumb">
                                          <a href="#">
                                              <img src="/static/img/trendy/sm1.jpg" alt="hero image"/>
                                          </a>
                                      </div>
                                      <div className="postbox__text pt-10">
                                          <div className="postbox__text-meta pb-10">
                                              <ul>
                                                  <li>
                                                      <i className="fas fa-calendar-alt"></i>
                                                      <span><Moment format="D MMM YYYY">{articleKidem.makale_yayintarihi}</Moment></span>
                                                  </li>
                                              </ul>
                                          </div>
                                          <h4 className="pr-0">
                                              <a href="#">{articleKidem.makale_baslik}</a>
                                          </h4>
                                      </div>
                                  </div>
                                )
                              }
                            }
                          )}

                        </div>
                        <div className="col-40">

                          {this.props.articlesIseiade.map((articleIseiade, index) => {
                            if (index < 2) {
                              return (
                                <div key={index} className="postbox mb-25">
                                    <div className="postbox__thumb">
                                        <a href="#">
                                            <img src="/static/img/trendy/lg1.jpg" alt="hero image"/>
                                        </a>
                                        <span className="post-cat post-absolute">
                                            <a href="#">{articleIseiade.makale_kategori}</a>
                                        </span>
                                    </div>
                                    <div className="postbox__text pt-10">
                                        <div className="postbox__text-meta pb-10">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span><Moment format="D MMM YYYY">{articleIseiade.makale_yayintarihi}</Moment></span>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4 className="title-16 pr-0">
                                            <a href="#">{articleIseiade.makale_baslik}</a>
                                        </h4>
                                    </div>
                                </div>
                              )
                            }
                          })}

                        </div>


                        <div className="col-20 d-md-none d-xl-block">

                          {this.props.articles.map((article, index) =>
                            <div key={index} className="post__small mb-30">
                                <div className="post__small-thumb f-left">
                                    <a href="#">
                                        <img src="/static/img/trendy/xs/xs-1.jpg" alt="hero image"/>
                                    </a>
                                </div>
                                <div className="post__small-text fix pl-10">
                                    <span className="sm-cat">
                                        <a href="#">{article.makale_kategori}</a>
                                    </span>
                                    <h4 className="title-13 pr-0">
                                        <a href="#">{article.makale_baslik}</a>
                                    </h4>
                                    <div className="post__small-text-meta">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span><Moment format="DD MMM YYYY">{article.makale_yayintarihi}</Moment></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                          )}
                        </div>


                        <div className="col-20 ">
                          {this.props.articlesGenelsaglik.map((article, index) =>
                            {
                              if (index < 3) {
                                return (
                                  <div key={index} className="postbox mb-25">
                                      <div className="postbox__thumb">
                                          <a href="#">
                                              <img src="/static/img/trendy/sm4.jpg" alt="hero image"/>
                                          </a>
                                      </div>
                                      <div className="postbox__text pt-10">
                                          <div className="postbox__text-meta pb-10">
                                              <ul>
                                                  <li>
                                                      <i className="fas fa-calendar-alt"></i>
                                                      <span><Moment format="DD MMM YYYY">{article.makale_yayintarihi}</Moment></span>
                                                  </li>
                                              </ul>
                                          </div>
                                          <h4 className="pr-0">
                                              <a href="#">{article.makale_baslik}</a>
                                          </h4>
                                      </div>
                                  </div>
                                )
                              }
                            }
                          )}

                        </div>
                    </div>
                </div>

            </section>




            <section className="cat-area pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="section-title mb-30">
                                <h2>KIDEM TAZMİNATI</h2>
                            </div>

                            <div className="postbox mb-25">
                                <div className="postbox__thumb">
                                    <a href="#">
                                        <img src="/static/img/cat/cat1.jpg" alt="hero image"/>
                                    </a>
                                </div>
                                <div className="postbox__text pt-20">
                                    <h4 className="title-18 pr-0">
                                        <a href="#">{this.props.articlesKidem[0].makale_baslik}</a>
                                    </h4>
                                    <div className="postbox__text-meta pb-10">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span><Moment format="DD MMM YYYY">{this.props.articlesKidem[0].makale_yayintarihi}</Moment></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="cat-sm-post">
                                <div className="post__small mb-30">
                                    <div className="post__small-thumb f-left">
                                        <a href="#">
                                            <img src="/static/img/trendy/xs/xs-12.jpg" alt="hero image"/>
                                        </a>
                                    </div>
                                    <div className="post__small-text fix pl-10">
                                        <h4 className="title-16 pr-0 mt-0">
                                            <a href="#">{this.props.articlesKidem[1].makale_baslik}</a>
                                        </h4>
                                        <div className="post__small-text-meta">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span><Moment format="DD MMM YYYY">{this.props.articlesKidem[1].makale_yayintarihi}</Moment></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="post__small mb-30">
                                    <div className="post__small-thumb f-left">
                                        <a href="#">
                                            <img src="/static/img/trendy/xs/xs-11.jpg" alt="hero image"/>
                                        </a>
                                    </div>
                                    <div className="post__small-text fix pl-10">
                                        <h4 className="title-16 pr-0 mt-0">
                                            <a href="#">{this.props.articlesKidem[2].makale_baslik}</a>
                                        </h4>
                                        <div className="post__small-text-meta">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span><Moment format="DD MMM YYYY">{this.props.articlesKidem[2].makale_yayintarihi}</Moment></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="section-title mb-30">
                                <h2>İŞE İADE DAVASI</h2>
                            </div>

                            <div className="postbox mb-25">
                                <div className="postbox__thumb">
                                    <a href="#">
                                        <img src="/static/img/cat/cat2.jpg" alt="hero image"/>
                                    </a>
                                </div>
                                <div className="postbox__text pt-20">
                                    <h4 className="title-18 pr-0">
                                        <a href="#">{this.props.articlesIseiade[0].makale_baslik}</a>
                                    </h4>
                                    <div className="postbox__text-meta pb-10">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span><Moment format="DD MMM YYYY">{this.props.articlesIseiade[0].makale_yayintarihi}</Moment></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="cat-sm-post">

                                <div className="post__small mb-30">
                                    <div className="post__small-thumb f-left">
                                        <a href="#">
                                            <img src="/static/img/trendy/xs/xs-7.jpg" alt="hero image"/>
                                        </a>
                                    </div>
                                    <div className="post__small-text fix pl-10">
                                        <h4 className="title-16 pr-0 mt-0">
                                            <a href="#">{this.props.articlesIseiade[1].makale_baslik}</a>
                                        </h4>
                                        <div className="post__small-text-meta">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span><Moment format="DD MMM YYYY">{this.props.articlesIseiade[1].makale_yayintarihi}</Moment></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="post__small mb-30">
                                    <div className="post__small-thumb f-left">
                                        <a href="#">
                                            <img src="/static/img/trendy/xs/xs-8.jpg" alt="hero image"/>
                                        </a>
                                    </div>
                                    <div className="post__small-text fix pl-10">
                                        <h4 className="title-16 pr-0 mt-0">
                                            <a href="#">{this.props.articlesIseiade[2].makale_baslik}</a>
                                        </h4>
                                        <div className="post__small-text-meta">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span><Moment format="DD MMM YYYY">{this.props.articlesIseiade[2].makale_yayintarihi}</Moment></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 d-md-none d-lg-block">
                            <div className="section-title mb-30">
                                <h2>İHBAR TAZMİNATI</h2>
                            </div>

                            <div className="postbox mb-25">
                                <div className="postbox__thumb">
                                    <a href="#">
                                        <img src="/static/img/cat/cat3.jpg" alt="hero image"/>
                                    </a>
                                </div>
                                <div className="postbox__text pt-20">
                                    <h4 className="title-18 pr-0">
                                        <a href="#">{this.props.articlesIhbartazminati[0].makale_baslik}</a>
                                    </h4>
                                    <div className="postbox__text-meta pb-10">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span><Moment format="DD MMM YYYY">{this.props.articlesIhbartazminati[0].makale_yayintarihi}</Moment></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="cat-sm-post">
                                <div className="post__small mb-30">
                                    <div className="post__small-thumb f-left">
                                        <a href="#">
                                            <img src="/static/img/trendy/xs/xs-10.jpg" alt="hero image"/>
                                        </a>
                                    </div>
                                    <div className="post__small-text fix pl-10">
                                        <h4 className="title-16 pr-0 mt-0">
                                            <a href="#">{this.props.articlesIhbartazminati[1].makale_baslik}</a>
                                        </h4>
                                        <div className="post__small-text-meta">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span><Moment format="DD MMM YYYY">{this.props.articlesIhbartazminati[1].makale_yayintarihi}</Moment></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="post__small mb-30">
                                    <div className="post__small-thumb f-left">
                                        <a href="#">
                                            <img src="/static/img/trendy/xs/xs-9.jpg" alt="hero image"/>
                                        </a>
                                    </div>
                                    <div className="post__small-text fix pl-10">
                                        <h4 className="title-16 pr-0 mt-0">
                                            <a href="#">{this.props.articlesIhbartazminati[2].makale_baslik}</a>
                                        </h4>
                                        <div className="post__small-text-meta">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span><Moment format="DD MMM YYYY">{this.props.articlesIhbartazminati[2].makale_yayintarihi}</Moment></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="app-area pb-60">

                    <div className="grey-bg pt-55 pb-55 pl-60 pr-60">
                        <div className="row">
                            <div className="col-xl-6 col-lg-12">
                                <div className="app-text text-center text-xl-left">
                                    <h2>Bizi Cepten Takip Edin</h2>
                                    <br/>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                <div className="app-store text-center text-xl-right">
                                    <a href="#"><img src="/static/img/store/apple.png" alt=""/></a>
                                    <a href="#"><img src="/static/img/store/google.png" alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
              
            </section>

        </main>

        <Footer/>

      </div>
    )
  }

}

export default index;
