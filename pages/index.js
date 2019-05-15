import Head from 'next/head';
import React from 'react';

import fetch from 'isomorphic-unfetch';

import Footer from '../components/Footer';
import TopHeader from '../components/TopHeader';
import NavbarUst from '../components/NavbarUst';
import MenuBar from '../components/MenuBar';

class index extends React.Component {
  static async getInitialProps(){
    const res = await fetch('http://localhost:8000/makaleler');
    const result = await res.json();
    const articles = result.results;
    const nextPage = result.next;
    const prevPage = result.prev;
    return {articles, nextPage, prevPage}
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
                            <div className="postbox mb-25">
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
                                                <span>01 Sep 2018</span>
                                            </li>
                                            <li>
                                                <i className="far fa-comment"></i>
                                                <span>(03)</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 className="pr-0">
                                        <a href="#">Paul Manafort’s Accountant Testifies She Helped Alter Financial Documents</a>
                                    </h4>
                                </div>
                            </div>
                            <div className="postbox mb-25">
                                <div className="postbox__thumb">
                                    <a href="#">
                                        <img src="/static/img/trendy/sm2.jpg" alt="hero image"/>
                                    </a>
                                </div>
                                <div className="postbox__text pt-10">
                                    <div className="postbox__text-meta pb-10">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span>01 Sep 2018</span>
                                            </li>
                                            <li>
                                                <i className="far fa-comment"></i>
                                                <span>(03)</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 className="pr-0">
                                        <a href="#">Rina Sawayama Is Not the Asian Britney Spears</a>
                                    </h4>
                                </div>
                            </div>
                            <div className="postbox mb-25">
                                <div className="postbox__thumb">
                                    <a href="#">
                                        <img src="/static/img/trendy/sm3.jpg" alt="hero image"/>
                                    </a>
                                </div>
                                <div className="postbox__text pt-10">
                                    <div className="postbox__text-meta pb-10">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span>01 Sep 2018</span>
                                            </li>
                                            <li>
                                                <i className="far fa-comment"></i>
                                                <span>(03)</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 className="pr-0">
                                        <a href="#">Receiving the Summer Sols tice the Swedish Way</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-40">
                            <div className="postbox mb-25">
                                <div className="postbox__thumb">
                                    <a href="#">
                                        <img src="/static/img/trendy/lg1.jpg" alt="hero image"/>
                                    </a>
                                    <span className="post-cat post-absolute">
                                        <a href="#">politic</a>
                                    </span>
                                </div>
                                <div className="postbox__text pt-10">
                                    <div className="postbox__text-meta pb-10">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span>01 Sep 2018</span>
                                            </li>
                                            <li>
                                                <i className="far fa-comment"></i>
                                                <span>(03)</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 className="title-16 pr-0">
                                        <a href="#">Trump’s Inaccurate Claims About High ways the world, Immigration and Beyoncé.</a>
                                    </h4>
                                </div>
                            </div>

                            <div className="postbox mb-25">
                                <div className="postbox__thumb">
                                    <a href="#">
                                        <img src="/static/img/trendy/lg2.jpg" alt="hero image"/>
                                    </a>
                                    <span className="post-cat post-absolute">
                                        <a href="#">travel</a>
                                    </span>
                                </div>
                                <div className="postbox__text pt-10">
                                    <div className="postbox__text-meta pb-10">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span>01 Sep 2018</span>
                                            </li>
                                            <li>
                                                <i className="far fa-comment"></i>
                                                <span>(03)</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 className="title-16 pr-0">
                                        <a href="#">Moving From Buyer to Seller, Major League Soccer Revenue In The World Wide Claims About.</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-20 d-md-none d-xl-block">
                            <div className="post__small mb-30">
                                <div className="post__small-thumb f-left">
                                    <a href="#">
                                        <img src="/static/img/trendy/xs/xs-1.jpg" alt="hero image"/>
                                    </a>
                                </div>
                                <div className="post__small-text fix pl-10">
                                    <span className="sm-cat">
                                        <a href="#">Kıdem Tazminatı</a>
                                    </span>
                                    <h4 className="title-13 pr-0">
                                        <a href="#">Kıdem Tazminatındaki Yenilikler</a>
                                    </h4>
                                    <div className="post__small-text-meta">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span>01 Eyl 2018</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="post__small mb-30">
                                <div className="post__small-thumb f-left">
                                    <a href="#">
                                        <img src="/static/img/trendy/xs/xs-2.jpg" alt="hero image"/>
                                    </a>
                                </div>
                                <div className="post__small-text fix pl-10">
                                    <span className="sm-cat">
                                        <a href="#">İhbar Tazminatı</a>
                                    </span>
                                    <h4 className="title-13 pr-0">
                                        <a href="#">İhbar Tazminatı Nasıl Hesaplanır?</a>
                                    </h4>
                                    <div className="post__small-text-meta">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span>01 Sep 2018</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="post__small mb-30">
                                <div className="post__small-thumb f-left">
                                    <a href="#">
                                        <img src="/static/img/trendy/xs/xs-3.jpg" alt="hero image"/>
                                    </a>
                                </div>
                                <div className="post__small-text fix pl-10">
                                    <span className="sm-cat">
                                        <a href="#">Fashion</a>
                                    </span>
                                    <h4 className="title-13 pr-0">
                                        <a href="#">Nahan dow plays Lieral lership..</a>
                                    </h4>
                                    <div className="post__small-text-meta">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span>01 Sep 2018</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="post__small mb-30">
                                <div className="post__small-thumb f-left">
                                    <a href="#">
                                        <img src="/static/img/trendy/xs/xs-4.jpg" alt="hero image"/>
                                    </a>
                                </div>
                                <div className="post__small-text fix pl-10">
                                    <span className="sm-cat">
                                        <a href="#">Travel</a>
                                    </span>
                                    <h4 className="title-13 pr-0">
                                        <a href="#">Weinstein pushs for dismissal.</a>
                                    </h4>
                                    <div className="post__small-text-meta">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span>01 Sep 2018</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="post__small mb-30">
                                <div className="post__small-thumb f-left">
                                    <a href="#">
                                        <img src="/static/img/trendy/xs/xs-5.jpg" alt="hero image"/>
                                    </a>
                                </div>
                                <div className="post__small-text fix pl-10">
                                    <span className="sm-cat">
                                        <a href="#">Politic</a>
                                    </span>
                                    <h4 className="title-13 pr-0">
                                        <a href="#">New Season Tiets Seat Optional.</a>
                                    </h4>
                                    <div className="post__small-text-meta">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span>01 Sep 2018</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="post__small mb-30">
                                <div className="post__small-thumb f-left">
                                    <a href="#">
                                        <img src="/static/img/trendy/xs/xs-6.jpg" alt="hero image"/>
                                    </a>
                                </div>
                                <div className="post__small-text fix pl-10">
                                    <span className="sm-cat">
                                        <a href="#">Study</a>
                                    </span>
                                    <h4 className="title-13 pr-0">
                                        <a href="#">For Marilyn St Any Place Can Be..</a>
                                    </h4>
                                    <div className="post__small-text-meta">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span>01 Sep 2018</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="post-btn mb-30">
                               <a href="#" className="btn btn-border">view more</a>
                            </div>
                        </div>
                        <div className="col-20 ">
                            <div className="postbox mb-25">
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
                                                <span>01 Sep 2018</span>
                                            </li>
                                            <li>
                                                <i className="far fa-comment"></i>
                                                <span>(03)</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 className="pr-0">
                                        <a href="#">Paul Manafort’s Accountant Testifies She Helped Alter Financial Documents</a>
                                    </h4>
                                </div>
                            </div>
                            <div className="postbox mb-25">
                                <div className="postbox__thumb">
                                    <a href="#">
                                        <img src="/static/img/trendy/sm5.jpg" alt="hero image"/>
                                    </a>
                                </div>
                                <div className="postbox__text pt-10">
                                    <div className="postbox__text-meta pb-10">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span>01 Sep 2018</span>
                                            </li>
                                            <li>
                                                <i className="far fa-comment"></i>
                                                <span>(03)</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 className="pr-0">
                                        <a href="#">Rina Sawayama Is Not the Asian Britney Spears</a>
                                    </h4>
                                </div>
                            </div>
                            <div className="postbox mb-25">
                                <div className="postbox__thumb">
                                    <a href="#">
                                        <img src="/static/img/trendy/sm6.jpg" alt="hero image"/>
                                    </a>
                                </div>
                                <div className="postbox__text pt-10">
                                    <div className="postbox__text-meta pb-10">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span>01 Sep 2018</span>
                                            </li>
                                            <li>
                                                <i className="far fa-comment"></i>
                                                <span>(03)</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 className="pr-0">
                                        <a href="#">Receiving the Summer Sols tice the Swedish Way</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            <section className="cat-area pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title mb-30">
                                <h2>video news</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="postbox mb-25">
                                <div className="postbox__thumb" data-overlay="dark" data-opacity="2">
                                    <a href="#">
                                        <img src="/static/img/video/video.jpg" alt="hero image"/>
                                    </a>
                                    <div className="video-play">
                                        <a href="https://www.youtube.com/watch?v=kvld2Ik429A" className="popup-video"><i className="fas fa-play"></i></a>
                                    </div>
                                </div>
                                <div className="postbox__text pt-20">
                                    <h4 className="title-22 pr-0">
                                        <a href="#">Group continues to sell and market memberships to Premier country club despite.</a>
                                    </h4>
                                    <div className="postbox__text-meta pb-10">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span>01 Sep 2018</span>
                                            </li>
                                            <li>
                                                <i className="far fa-comment"></i>
                                                <span>(03)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="postbox mb-25">
                                <div className="postbox__thumb" data-overlay="dark" data-opacity="2">
                                    <a href="#">
                                        <img src="/static/img/video/video-2.jpg" alt="hero image"/>
                                    </a>
                                    <div className="video-play">
                                        <a href="https://www.youtube.com/watch?v=kvld2Ik429A" className="popup-video"><i className="fas fa-play"></i></a>
                                    </div>
                                </div>
                                <div className="postbox__text pt-20">
                                    <h4 className="title-22 pr-0">
                                        <a href="#">Group continues to sell and market memberships to Premier country club despite.</a>
                                    </h4>
                                    <div className="postbox__text-meta pb-10">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span>01 Sep 2018</span>
                                            </li>
                                            <li>
                                                <i className="far fa-comment"></i>
                                                <span>(03)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="cat-area pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="section-title mb-30">
                                <h2>Science</h2>
                            </div>

                            <div className="postbox mb-25">
                                <div className="postbox__thumb">
                                    <a href="#">
                                        <img src="/static/img/cat/cat1.jpg" alt="hero image"/>
                                    </a>
                                </div>
                                <div className="postbox__text pt-20">
                                    <h4 className="title-18 pr-0">
                                        <a href="#">Mustify Winner Is Rtired Because of Weaths Bads Ankle World Wide.</a>
                                    </h4>
                                    <div className="postbox__text-meta pb-10">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span>01 Sep 2018</span>
                                            </li>
                                            <li>
                                                <i className="far fa-comment"></i>
                                                <span>(03)</span>
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
                                            <a href="#">Hobots or Job Training: Mnutuers Grapple With How to Improve.</a>
                                        </h4>
                                        <div className="post__small-text-meta">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span>01 Sep 2018</span>
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
                                            <a href="#">Robots or Job Training: Manutues Grapple With How to Improve..</a>
                                        </h4>
                                        <div className="post__small-text-meta">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span>01 Sep 2018</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="section-title mb-30">
                                <h2>travel</h2>
                            </div>

                            <div className="postbox mb-25">
                                <div className="postbox__thumb">
                                    <a href="#">
                                        <img src="/static/img/cat/cat2.jpg" alt="hero image"/>
                                    </a>
                                </div>
                                <div className="postbox__text pt-20">
                                    <h4 className="title-18 pr-0">
                                        <a href="#">Robots or Job Training: Manutues Grapple With How to Improve.</a>
                                    </h4>
                                    <div className="postbox__text-meta pb-10">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span>01 Sep 2018</span>
                                            </li>
                                            <li>
                                                <i className="far fa-comment"></i>
                                                <span>(03)</span>
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
                                            <a href="#">Canadian Shoppers Pay When Visa and MasterCard.</a>
                                        </h4>
                                        <div className="post__small-text-meta">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span>01 Sep 2018</span>
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
                                            <a href="#">Who is next football Super Hero. Check the future star</a>
                                        </h4>
                                        <div className="post__small-text-meta">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span>01 Sep 2018</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 d-md-none d-lg-block">
                            <div className="section-title mb-30">
                                <h2>lifestyle</h2>
                            </div>

                            <div className="postbox mb-25">
                                <div className="postbox__thumb">
                                    <a href="#">
                                        <img src="/static/img/cat/cat3.jpg" alt="hero image"/>
                                    </a>
                                </div>
                                <div className="postbox__text pt-20">
                                    <h4 className="title-18 pr-0">
                                        <a href="#">Denying passports to Americans along the border throwing their citizens.</a>
                                    </h4>
                                    <div className="postbox__text-meta pb-10">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span>01 Sep 2018</span>
                                            </li>
                                            <li>
                                                <i className="far fa-comment"></i>
                                                <span>(03)</span>
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
                                            <a href="#">Hobots or Job Training: Mnutuers Grapple With How to Improve.</a>
                                        </h4>
                                        <div className="post__small-text-meta">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span>01 Sep 2018</span>
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
                                            <a href="#">Robots or Job Training: Manutues Grapple With How to Improve..</a>
                                        </h4>
                                        <div className="post__small-text-meta">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span>01 Sep 2018</span>
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


            <section className="add-area pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 d-md-none d-xl-block">
                            <div className="section-title mb-30">
                                <h2>advertisement</h2>
                            </div>
                            <div className="add-banner mb-30">
                                <a href="#"><img src="/static/img/add/add.jpg" alt=""/></a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-8 col-md-6">
                            <div className="section-title mb-30">
                                <h2>Magazine</h2>
                            </div>
                            <div className="cat-sm-post mb-30">
                                <div className="post__small mb-25">
                                    <div className="post__small-thumb f-left">
                                        <a href="#">
                                            <img src="/static/img/trendy/xs/xs-7.jpg" alt="hero image"/>
                                        </a>
                                    </div>
                                    <div className="post__small-text fix pl-10">
                                        <h4 className="title-16 pr-0 mt-0">
                                            <a href="#">Robots or Job Training: Manuturers Grapple With How to Improve Their Economic Fortunes</a>
                                        </h4>
                                        <div className="post__small-text-meta">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span>01 Sep 2018</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="post__small mb-25">
                                    <div className="post__small-text fix">
                                        <h4 className="title-16 pr-0 mt-0">
                                            <a href="#">Japanese Medical School Accused of With How to Improve Their Economic Fortunes Riggmisions to Keep Women Out world.</a>
                                        </h4>
                                        <div className="post__small-text-meta">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span>01 Sep 2018</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="post__small mb-25">
                                    <div className="post__small-text fix">
                                        <h4 className="title-16 pr-0 mt-0">
                                            <a href="#">Leslie Moonves Speaks on CBS Earnings Cabunsot About Harassment Allegations</a>
                                        </h4>
                                        <div className="post__small-text-meta">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span>01 Sep 2018</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6 d-md-none d-xl-block">
                            <div className="section-title mb-30">
                                <h2>advertisement</h2>
                            </div>
                            <div className="add-banner mb-30">
                                <a href="#"><img src="/static/img/add/add.jpg" alt=""/></a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="latest-area pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title mb-30">
                                <h2>latest news</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-7 col-lg-12">
                            <div className="row">
                                <div className="col-xl-6 col-lg-4 col-md-6">
                                    <div className="postbox mb-30">
                                        <div className="postbox__thumb">
                                            <a href="#">
                                                <img src="/static/img/latest/latest-1.jpg" alt="hero image"/>
                                            </a>
                                            <span className="post-cat post-absolute">
                                                <a href="#">politic</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-8 col-md-6">
                                    <div className="postbox__text mb-30">
                                        <h4 className="title-16 pr-0">
                                            <a href="#">Succession finale: jeremy strong keall’s struggles what comes next.</a>
                                        </h4>
                                        <div className="postbox__text-meta pb-10">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span>01 Sep 2018</span>
                                                </li>
                                                <li>
                                                    <i className="far fa-comment"></i>
                                                    <span>(03)</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="desc-text mb-20">
                                            <p>But I must explain to you how all this mistaken idea of denouncing sure and praising pain was born
                                                and I will give you a complete account.</p>
                                        </div>
                                        <a href="#" className="btn btn-soft">read more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-lg-4 col-md-6">
                                    <div className="postbox mb-30">
                                        <div className="postbox__thumb">
                                            <a href="#">
                                                <img src="/static/img/latest/latest-2.jpg" alt="hero image"/>
                                            </a>
                                            <span className="post-cat post-absolute">
                                                <a href="#">politic</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-8 col-md-6">
                                    <div className="postbox__text mb-30">
                                        <h4 className="title-16 pr-0">
                                            <a href="#">Critic’s notebook: deep dives into jutice from shakespeare and atticus finch</a>
                                        </h4>
                                        <div className="postbox__text-meta pb-10">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span>01 Sep 2018</span>
                                                </li>
                                                <li>
                                                    <i className="far fa-comment"></i>
                                                    <span>(03)</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="desc-text mb-20">
                                            <p>But I must explain to you how all this mistaken idea of denouncing sure and praising pain was born
                                                and I will give you a complete account.</p>
                                        </div>
                                        <a href="#" className="btn btn-soft">read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="postbox mb-30">
                                <div className="postbox__thumb">
                                    <a href="#">
                                        <img className="img-100" src="/static/img/latest/latest-lg.jpg" alt="hero image"/>
                                    </a>
                                    <span className="post-cat post-absolute">
                                        <a href="#">politic</a>
                                    </span>
                                </div>
                                <div className="postbox__text pt-25">
                                    <h4 className="title-16 pr-0">
                                        <a href="#">Trump administration officials, have used veto power over other companies, forcing them to buy their
                                            products instead of .
                                        </a>
                                    </h4>
                                    <div className="postbox__text-meta pb-10">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span>01 Sep 2018</span>
                                            </li>
                                            <li>
                                                <i className="far fa-comment"></i>
                                                <span>(03)</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="desc-text mb-20">
                                        <p>But I must explain to you how all this mistaken idea of denouncing sure and praising Group continues
                                            to sell and market memberships to Premier country club despite. pain was born and I will give you
                                            a complete account. </p>
                                    </div>
                                    <a href="#" className="btn btn-soft">read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="app-area pb-60">
                <div className="container">
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
                </div>
            </section>

        </main>

        <Footer/>

      </div>
    )
  }

}

export default index;
