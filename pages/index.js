import Head from "next/head";
import Link from "next/link";
import React from "react";
import Moment from "react-moment";
import "moment/locale/tr";

import fetch from "isomorphic-unfetch";
import getConfig from "next/config";

import apiEndpoints from "../apiEndpoints";

import Footer from "../components/Footer";
import TopHeader from "../components/TopHeader";
import NavbarUst from "../components/NavbarUst";
import MenuBar from "../components/MenuBar";

const Home = (props) => {
  return (
    <div>
      <Head>
        <title>İş Avukatım</title>
        <meta
          name="description"
          content="İş Avukatım ile iş davalarınıza kıdem, ihbar, işe iade ve sigorta gibi konularda çözümler bulun."
        />
        <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/static/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="/static/css/style.css" />
      </Head>
      <header className="header">
        <TopHeader />
        <NavbarUst />
        <MenuBar />
      </header>

      <main>
        <br />
        {/* HERO SECTION */}
        <section className="hero-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="hero pos-relative mb-30">
                  <div className="hero__thumb" data-overlay="dark-gradient">
                    <Link
                      href={`/makale-detay?makaleid=${props.articles[0].id}&makaleslug=${props.articles[0].makale_slug}`}
                      as={`/makale-detay/${props.articles[0].makale_slug}/${props.articles[0].id}`}
                    >
                      <a>
                        <img
                          className="main-page-first-img"
                          src={`${apiEndpoints.mediaURL}${props.articles[0].image625x400}`}
                          alt="hero image"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="hero__text">
                    <span className="post-cat mb-10">
                      <Link
                        href={`/hukuki-yayinlar/kategori/${props.articles[0].makale_kategori_nondisplay}`}
                      >
                        <a>{props.articles[0].makale_kategori}</a>
                      </Link>
                    </span>
                    <h3 className="pr-100">
                      <Link
                        href={`/makale-detay?makaleid=${props.articles[0].id}&makaleslug=${props.articles[0].makale_slug}`}
                        as={`/makale-detay/${props.articles[0].makale_slug}/${props.articles[0].id}`}
                      >
                        <a>{props.articles[0].makale_baslik}</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="hero pos-relative mb-30">
                  <div className="hero__thumb" data-overlay="dark-gradient">
                    <Link
                      href={`/makale-detay?makaleid=${props.articles[1].id}&makaleslug=${props.articles[1].makale_slug}`}
                      as={`/makale-detay/${props.articles[1].makale_slug}/${props.articles[1].id}`}
                    >
                      <a>
                        <img
                          className="postbox-img-297x400"
                          src={`${apiEndpoints.mediaURL}${props.articles[1].image297x400}`}
                          alt={props.articles[1].makale_kategori}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="hero__text hero__text-small">
                    <span className="post-cat mb-10">
                      <Link
                        href={`/makale-detay?makaleid=${props.articles[1].id}&makaleslug=${props.articles[1].makale_slug}`}
                        as={`/makale-detay/${props.articles[1].makale_slug}/${props.articles[1].id}`}
                      >
                        <a>{props.articles[1].makale_kategori}</a>
                      </Link>
                    </span>
                    <h3 className="pr-0">
                      <Link
                        href={`/makale-detay?makaleid=${props.articles[1].id}&makaleslug=${props.articles[1].makale_slug}`}
                        as={`/makale-detay/${props.articles[1].makale_slug}/${props.articles[1].id}`}
                      >
                        <a>{props.articles[1].makale_baslik}</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="hero pos-relative mb-30">
                  <div className="hero__thumb" data-overlay="dark-gradient">
                    <Link
                      href={`/makale-detay?makaleid=${props.articles[2].id}&makaleslug=${props.articles[2].makale_slug}`}
                      as={`/makale-detay/${props.articles[2].makale_slug}/${props.articles[2].id}`}
                    >
                      <a>
                        <img
                          className="postbox-img-297x400"
                          src={`${apiEndpoints.mediaURL}${props.articles[2].image297x400}`}
                          alt={props.articles[2].makale_kategori}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="hero__text hero__text-small">
                    <span className="post-cat mb-10">
                      <Link
                        href={`/makale-detay?makaleid=${props.articles[2].id}&makaleslug=${props.articles[2].makale_slug}`}
                        as={`/makale-detay/${props.articles[2].makale_slug}/${props.articles[2].id}`}
                      >
                        <a>{props.articles[2].makale_kategori}</a>
                      </Link>
                    </span>
                    <h3 className="pr-0">
                      <Link
                        href={`/makale-detay?makaleid=${props.articles[2].id}&makaleslug=${props.articles[2].makale_slug}`}
                        as={`/makale-detay/${props.articles[2].makale_slug}/${props.articles[2].id}`}
                      >
                        <a>{props.articles[2].makale_baslik}</a>
                      </Link>
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
                {props.articlesKidem.map((articleKidem, index) => {
                  if (index < 3) {
                    return (
                      <div key={index} className="postbox mb-25">
                        <div className="postbox__thumb">
                          <Link
                            href={`/makale-detay?makaleid=${articleKidem.id}&makaleslug=${articleKidem.makale_slug}`}
                            as={`/makale-detay/${articleKidem.makale_slug}/${articleKidem.id}`}
                          >
                            <a>
                              <img
                                className="postbox-img-240x160"
                                src={`${apiEndpoints.mediaURL}${articleKidem.image240x160}`}
                                alt={articleKidem.makale_kategori}
                              />
                            </a>
                          </Link>
                        </div>
                        <div className="postbox__text pt-10">
                          <div className="postbox__text-meta pb-10">
                            <ul>
                              <li>
                                <i className="fas fa-calendar-alt"></i>
                                <span>
                                  <Moment format="D MMM YYYY">
                                    {articleKidem.makale_yayintarihi}
                                  </Moment>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <h4 className="pr-0">
                            <Link
                              href={`/makale-detay?makaleid=${articleKidem.id}&makaleslug=${articleKidem.makale_slug}`}
                              as={`/makale-detay/${articleKidem.makale_slug}/${articleKidem.id}`}
                            >
                              <a>{articleKidem.makale_baslik}</a>
                            </Link>
                          </h4>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
              <div className="col-40">
                {props.articlesIseiade.map((articleIseiade, index) => {
                  if (index < 2) {
                    return (
                      <div key={index} className="postbox mb-25">
                        <div className="postbox__thumb">
                          <Link
                            href={`/makale-detay?makaleid=${articleIseiade.id}&makaleslug=${articleIseiade.makale_slug}`}
                            as={`/makale-detay/${articleIseiade.makale_slug}/${articleIseiade.id}`}
                          >
                            <a>
                              <img
                                className="postbox-img500x258"
                                src={`${apiEndpoints.mediaURL}${articleIseiade.image500x287}`}
                                alt={articleIseiade.makale_kategori}
                              />
                            </a>
                          </Link>
                          <span className="post-cat post-absolute">
                            <Link
                              href={`/hukuki-yayinlar/kategori/${articleIseiade.makale_kategori_nondisplay}`}
                            >
                              <a>{articleIseiade.makale_kategori}</a>
                            </Link>
                          </span>
                        </div>
                        <div className="postbox__text pt-10">
                          <div className="postbox__text-meta pb-10">
                            <ul>
                              <li>
                                <i className="fas fa-calendar-alt"></i>
                                <span>
                                  <Moment format="D MMM YYYY">
                                    {articleIseiade.makale_yayintarihi}
                                  </Moment>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <h4 className="title-16 pr-0">
                            <Link
                              href={`/makale-detay?makaleid=${articleIseiade.id}&makaleslug=${articleIseiade.makale_slug}`}
                              as={`/makale-detay/${articleIseiade.makale_slug}/${articleIseiade.id}`}
                            >
                              <a>{articleIseiade.makale_baslik}</a>
                            </Link>
                          </h4>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>

              <div className="col-20 d-md-none d-xl-block">
                {props.articles.map((article, index) => (
                  <div key={index} className="post__small mb-30">
                    <div className="post__small-thumb f-left">
                      <a
                        href={`/makale-detay?makaleid=${article.id}&makaleslug=${article.makale_slug}`}
                        as={`/makale-detay/${article.makale_slug}/${article.id}`}
                      >
                        <img
                          className="postbox-img-100x85"
                          src={`${apiEndpoints.mediaURL}${article.image100x85}`}
                          alt={article.makale_kategori}
                        />
                      </a>
                    </div>
                    <div className="post__small-text fix pl-10">
                      <span className="sm-cat">
                        <a
                          href={`/hukuki-yayinlar/kategori/${article.makale_kategori_nondisplay}`}
                        >
                          {article.makale_kategori}
                        </a>
                      </span>
                      <h4 className="title-13 pr-0">
                        <Link
                          href={`/makale-detay?makaleid=${article.id}&makaleslug=${article.makale_slug}`}
                          as={`/makale-detay/${article.makale_slug}/${article.id}`}
                        >
                          <a>{article.makale_baslik}</a>
                        </Link>
                      </h4>
                      <div className="post__small-text-meta">
                        <ul>
                          <li>
                            <i className="fas fa-calendar-alt"></i>
                            <span>
                              <Moment format="DD MMM YYYY">
                                {article.makale_yayintarihi}
                              </Moment>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="col-20 ">
                {props.articlesGenelsaglik.map((article, index) => {
                  if (index < 3) {
                    return (
                      <div key={index} className="postbox mb-25">
                        <div className="postbox__thumb">
                          <Link
                            href={`/makale-detay?makaleid=${article.id}&makaleslug=${article.makale_slug}`}
                            as={`/makale-detay/${article.makale_slug}/${article.id}`}
                          >
                            <a>
                              <img
                                className="postbox-img-240x160"
                                src={`${apiEndpoints.mediaURL}${article.image240x160}`}
                                alt={article.makale_kategori}
                              />
                            </a>
                          </Link>
                        </div>
                        <div className="postbox__text pt-10">
                          <div className="postbox__text-meta pb-10">
                            <ul>
                              <li>
                                <i className="fas fa-calendar-alt"></i>
                                <span>
                                  <Moment format="DD MMM YYYY">
                                    {article.makale_yayintarihi}
                                  </Moment>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <h4 className="pr-0">
                            <Link
                              href={`/makale-detay?makaleid=${article.id}&makaleslug=${article.makale_slug}`}
                              as={`/makale-detay/${article.makale_slug}/${article.id}`}
                            >
                              <a>{article.makale_baslik}</a>
                            </Link>
                          </h4>
                        </div>
                      </div>
                    );
                  }
                })}
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
                    <Link
                      href={`/makale-detay?makaleid=${props.articlesKidem[0].id}&makaleslug=${props.articlesKidem[0].makale_slug}`}
                      as={`/makale-detay/${props.articlesKidem[0].makale_slug}/${props.articlesKidem[0].id}`}
                    >
                      <a>
                        <img
                          className="postbox-img-406x270"
                          src={`${apiEndpoints.mediaURL}${props.articlesKidem[0].image500x287}`}
                          alt={props.articlesKidem[0].makale_kategori}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="postbox__text pt-20">
                    <h4 className="title-18 pr-0">
                      <Link
                        href={`/makale-detay?makaleid=${props.articlesKidem[0].id}&makaleslug=${props.articlesKidem[0].makale_slug}`}
                        as={`/makale-detay/${props.articlesKidem[0].makale_slug}/${props.articlesKidem[0].id}`}
                      >
                        <a>{props.articlesKidem[0].makale_baslik}</a>
                      </Link>
                    </h4>
                    <div className="postbox__text-meta pb-10">
                      <ul>
                        <li>
                          <i className="fas fa-calendar-alt"></i>
                          <span>
                            <Moment format="DD MMM YYYY">
                              {props.articlesKidem[0].makale_yayintarihi}
                            </Moment>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="cat-sm-post">
                  <div className="post__small mb-30">
                    <div className="post__small-thumb f-left">
                      <Link
                        href={`/makale-detay?makaleid=${props.articlesKidem[1].id}&makaleslug=${props.articlesKidem[1].makale_slug}`}
                        as={`/makale-detay/${props.articlesKidem[1].makale_slug}/${props.articlesKidem[1].id}`}
                      >
                        <a>
                          <img
                            className="postbox-img-100x85"
                            src={`${apiEndpoints.mediaURL}${props.articlesKidem[1].image100x85}`}
                            alt={`${props.articlesKidem[1].makale_kategori}`}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="post__small-text fix pl-10">
                      <h4 className="title-16 pr-0 mt-0">
                        <Link
                          href={`/makale-detay?makaleid=${props.articlesKidem[1].id}&makaleslug=${props.articlesKidem[1].makale_slug}`}
                          as={`/makale-detay/${props.articlesKidem[1].makale_slug}/${props.articlesKidem[1].id}`}
                        >
                          <a>{props.articlesKidem[1].makale_baslik}</a>
                        </Link>
                      </h4>
                      <div className="post__small-text-meta">
                        <ul>
                          <li>
                            <i className="fas fa-calendar-alt"></i>
                            <span>
                              <Moment format="DD MMM YYYY">
                                {props.articlesKidem[1].makale_yayintarihi}
                              </Moment>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="post__small mb-30">
                    <div className="post__small-thumb f-left">
                      <Link
                        href={`/makale-detay?makaleid=${props.articlesKidem[2].id}&makaleslug=${props.articlesKidem[2].makale_slug}`}
                        as={`/makale-detay/${props.articlesKidem[2].makale_slug}/${props.articlesKidem[2].id}`}
                      >
                        <a>
                          <img
                            className="postbox-img-100x85"
                            src={`${apiEndpoints.mediaURL}${props.articlesKidem[2].image100x85}`}
                            alt={`${props.articlesKidem[2].makale_kategori}`}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="post__small-text fix pl-10">
                      <h4 className="title-16 pr-0 mt-0">
                        <Link
                          href={`/makale-detay?makaleid=${props.articlesKidem[2].id}&makaleslug=${props.articlesKidem[2].makale_slug}`}
                          as={`/makale-detay/${props.articlesKidem[2].makale_slug}/${props.articlesKidem[2].id}`}
                        >
                          <a>{props.articlesKidem[2].makale_baslik}</a>
                        </Link>
                      </h4>
                      <div className="post__small-text-meta">
                        <ul>
                          <li>
                            <i className="fas fa-calendar-alt"></i>
                            <span>
                              <Moment format="DD MMM YYYY">
                                {props.articlesKidem[2].makale_yayintarihi}
                              </Moment>
                            </span>
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
                    <Link
                      href={`/makale-detay?makaleid=${props.articlesIseiade[0].id}&makaleslug=${props.articlesIseiade[0].makale_slug}`}
                      as={`/makale-detay/${props.articlesIseiade[0].makale_slug}/${props.articlesIseiade[0].id}`}
                    >
                      <a>
                        <img
                          className="postbox-img-406x270"
                          src={`${apiEndpoints.mediaURL}${props.articlesIseiade[0].image500x287}`}
                          alt={props.articlesIseiade[0].makale_kategori}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="postbox__text pt-20">
                    <h4 className="title-18 pr-0">
                      <Link
                        href={`/makale-detay?makaleid=${props.articlesIseiade[0].id}&makaleslug=${props.articlesIseiade[0].makale_slug}`}
                        as={`/makale-detay/${props.articlesIseiade[0].makale_slug}/${props.articlesIseiade[0].id}`}
                      >
                        <a>{props.articlesIseiade[0].makale_baslik}</a>
                      </Link>
                    </h4>
                    <div className="postbox__text-meta pb-10">
                      <ul>
                        <li>
                          <i className="fas fa-calendar-alt"></i>
                          <span>
                            <Moment format="DD MMM YYYY">
                              {props.articlesIseiade[0].makale_yayintarihi}
                            </Moment>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="cat-sm-post">
                  <div className="post__small mb-30">
                    <div className="post__small-thumb f-left">
                      <Link
                        href={`/makale-detay?makaleid=${props.articlesIseiade[1].id}&makaleslug=${props.articlesIseiade[1].makale_slug}`}
                        as={`/makale-detay/${props.articlesIseiade[1].makale_slug}/${props.articlesIseiade[1].id}`}
                      >
                        <a>
                          <img
                            className="postbox-img-100x85"
                            src={`${apiEndpoints.mediaURL}${props.articlesIseiade[1].image100x85}`}
                            alt={props.articlesIseiade[1].makale_kategori}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="post__small-text fix pl-10">
                      <h4 className="title-16 pr-0 mt-0">
                        <Link
                          href={`/makale-detay?makaleid=${props.articlesIseiade[1].id}&makaleslug=${props.articlesIseiade[1].makale_slug}`}
                          as={`/makale-detay/${props.articlesIseiade[1].makale_slug}/${props.articlesIseiade[1].id}`}
                        >
                          <a>{props.articlesIseiade[1].makale_baslik}</a>
                        </Link>
                      </h4>
                      <div className="post__small-text-meta">
                        <ul>
                          <li>
                            <i className="fas fa-calendar-alt"></i>
                            <span>
                              <Moment format="DD MMM YYYY">
                                {props.articlesIseiade[1].makale_yayintarihi}
                              </Moment>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="post__small mb-30">
                    <div className="post__small-thumb f-left">
                      <Link
                        href={`/makale-detay?makaleid=${props.articlesIseiade[2].id}&makaleslug=${props.articlesIseiade[2].makale_slug}`}
                        as={`/makale-detay/${props.articlesIseiade[2].makale_slug}/${props.articlesIseiade[2].id}`}
                      >
                        <a>
                          <img
                            className="postbox-img-100x85"
                            src={`${apiEndpoints.mediaURL}${props.articlesIseiade[2].image100x85}`}
                            alt={props.articlesIseiade[2].makale_kategori}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="post__small-text fix pl-10">
                      <h4 className="title-16 pr-0 mt-0">
                        <Link
                          href={`/makale-detay?makaleid=${props.articlesIseiade[2].id}&makaleslug=${props.articlesIseiade[2].makale_slug}`}
                          as={`/makale-detay/${props.articlesIseiade[2].makale_slug}/${props.articlesIseiade[2].id}`}
                        >
                          <a>{props.articlesIseiade[2].makale_baslik}</a>
                        </Link>
                      </h4>
                      <div className="post__small-text-meta">
                        <ul>
                          <li>
                            <i className="fas fa-calendar-alt"></i>
                            <span>
                              <Moment format="DD MMM YYYY">
                                {props.articlesIseiade[2].makale_yayintarihi}
                              </Moment>
                            </span>
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
                    <Link
                      href={`/makale-detay?makaleid=${props.articlesIhbartazminati[0].id}&makaleslug=${props.articlesIhbartazminati[0].makale_slug}`}
                      as={`/makale-detay/${props.articlesIhbartazminati[0].makale_slug}/${props.articlesIhbartazminati[0].id}`}
                    >
                      <a>
                        <img
                          className="postbox-img-406x270"
                          src={`${apiEndpoints.mediaURL}${props.articlesIhbartazminati[0].image500x287}`}
                          alt={props.articlesIhbartazminati[0].makale_kategori}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="postbox__text pt-20">
                    <h4 className="title-18 pr-0">
                      <Link
                        href={`/makale-detay?makaleid=${props.articlesIhbartazminati[0].id}&makaleslug=${props.articlesIhbartazminati[0].makale_slug}`}
                        as={`/makale-detay/${props.articlesIhbartazminati[0].makale_slug}/${props.articlesIhbartazminati[0].id}`}
                      >
                        <a>{props.articlesIhbartazminati[0].makale_baslik}</a>
                      </Link>
                    </h4>
                    <div className="postbox__text-meta pb-10">
                      <ul>
                        <li>
                          <i className="fas fa-calendar-alt"></i>
                          <span>
                            <Moment format="DD MMM YYYY">
                              {
                                props.articlesIhbartazminati[0]
                                  .makale_yayintarihi
                              }
                            </Moment>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="cat-sm-post">
                  <div className="post__small mb-30">
                    <div className="post__small-thumb f-left">
                      <Link
                        href={`/makale-detay?makaleid=${props.articlesIhbartazminati[1].id}&makaleslug=${props.articlesIhbartazminati[1].makale_slug}`}
                        as={`/makale-detay/${props.articlesIhbartazminati[1].makale_slug}/${props.articlesIhbartazminati[1].id}`}
                      >
                        <a>
                          <img
                            className="postbox-img-100x85"
                            src={`${apiEndpoints.mediaURL}${props.articlesIhbartazminati[1].image100x85}`}
                            alt={
                              props.articlesIhbartazminati[1].makale_kategori
                            }
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="post__small-text fix pl-10">
                      <h4 className="title-16 pr-0 mt-0">
                        <Link
                          href={`/makale-detay?makaleid=${props.articlesIhbartazminati[1].id}&makaleslug=${props.articlesIhbartazminati[1].makale_slug}`}
                          as={`/makale-detay/${props.articlesIhbartazminati[1].makale_slug}/${props.articlesIhbartazminati[1].id}`}
                        >
                          <a>{props.articlesIhbartazminati[1].makale_baslik}</a>
                        </Link>
                      </h4>
                      <div className="post__small-text-meta">
                        <ul>
                          <li>
                            <i className="fas fa-calendar-alt"></i>
                            <span>
                              <Moment format="DD MMM YYYY">
                                {
                                  props.articlesIhbartazminati[1]
                                    .makale_yayintarihi
                                }
                              </Moment>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="post__small mb-30">
                    <div className="post__small-thumb f-left">
                      <Link
                        href={`/makale-detay?makaleid=${props.articlesIhbartazminati[2].id}&makaleslug=${props.articlesIhbartazminati[2].makale_slug}`}
                        as={`/makale-detay/${props.articlesIhbartazminati[2].makale_slug}/${props.articlesIhbartazminati[2].id}`}
                      >
                        <a>
                          <img
                            className="postbox-img-100x85"
                            src={`${apiEndpoints.mediaURL}${props.articlesIhbartazminati[2].image100x85}`}
                            alt={
                              props.articlesIhbartazminati[2].makale_kategori
                            }
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="post__small-text fix pl-10">
                      <h4 className="title-16 pr-0 mt-0">
                        <Link
                          href={`/makale-detay?makaleid=${props.articlesIhbartazminati[2].id}&makaleslug=${props.articlesIhbartazminati[2].makale_slug}`}
                          as={`/makale-detay/${props.articlesIhbartazminati[2].makale_slug}/${props.articlesIhbartazminati[2].id}`}
                        >
                          <a>{props.articlesIhbartazminati[2].makale_baslik}</a>
                        </Link>
                      </h4>
                      <div className="post__small-text-meta">
                        <ul>
                          <li>
                            <i className="fas fa-calendar-alt"></i>
                            <span>
                              <Moment format="DD MMM YYYY">
                                {
                                  props.articlesIhbartazminati[2]
                                    .makale_yayintarihi
                                }
                              </Moment>
                            </span>
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
                  <br />
                </div>
              </div>
              <div className="col-xl-6 col-lg-12">
                <div className="app-store text-center text-xl-right">
                  <img
                    className="mr-2 mb-1"
                    src="/static/img/store/apple.png"
                    alt="apple store app"
                  />
                  <img
                    src="/static/img/store/google.png"
                    alt="play store app"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export async function getStaticProps(context) {
  const { publicRuntimeConfig } = getConfig();

  const [
    result,
    resultKidem,
    resultIseiade,
    resultGenelsaglik,
    resultIhbartazminati,
  ] = await Promise.all([
    fetch(`${publicRuntimeConfig.apiEndpoint}makalesixitem`),
    fetch(
      `${publicRuntimeConfig.apiEndpoint}kategorifilter?kategori=kidemtazminati`
    ),
    fetch(
      `${publicRuntimeConfig.apiEndpoint}kategorifilter?kategori=iseiadedavasi`
    ),
    fetch(
      `${publicRuntimeConfig.apiEndpoint}kategorifilter?kategori=hizmettespitdavasi`
    ),
    fetch(
      `${publicRuntimeConfig.apiEndpoint}kategorifilter?kategori=ihbartazminati`
    ),
  ]);
  const [
    articles,
    articlesKidem,
    articlesIseiade,
    articlesGenelsaglik,
    articlesIhbartazminati,
  ] = await Promise.all([
    result.json(),
    resultKidem.json(),
    resultIseiade.json(),
    resultGenelsaglik.json(),
    resultIhbartazminati.json(),
  ]);

  return {
    props: {
      articles: articles.results,
      articlesKidem: articlesKidem.results,
      articlesIseiade: articlesIseiade.results,
      articlesGenelsaglik: articlesGenelsaglik.results,
      articlesIhbartazminati: articlesIhbartazminati.results,
    },
    revalidate: 600,
  };
}

export default Home;
