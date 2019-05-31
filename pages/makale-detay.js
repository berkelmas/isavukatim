import Head from 'next/head';
import Link from 'next/link';
import Error from 'next/error';

import fetch from 'isomorphic-unfetch';
import Moment from 'react-moment';
import 'moment/locale/tr';

import getConfig from 'next/config';

import Footer from '../components/Footer';
import TopHeader from '../components/TopHeader';
import NavbarUst from '../components/NavbarUst';
import MenuBar from '../components/MenuBar';

function makaledetay(props){

  if (props.makale === 'null') {

    return <Error />

  } else {

    return(
      <div>
        <Head>
          <title>İş Avukatından Makale Detay</title>
          <link rel="stylesheet" href="/static/css/bootstrap.min.css"/>
          <link rel="stylesheet" href="/static/css/fontawesome-all.min.css"/>
          <link rel="stylesheet" href="/static/css/style.css"/>
        </Head>

        <TopHeader />
        <NavbarUst />
        <MenuBar />



        <section className="post-details-area pb-30 pt-30">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8">

                        <div className="post-details">
                            <h2 className="details-title mb-15">{props.makale.makale_baslik}</h2>


                            <div className="postbox__text-meta pb-30">
                                <ul>
                                    <li>
                                        <i className="far fa-user-circle"></i>
                                        <span>{props.makale.yazaravukat.avukat_name}</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-calendar-alt"></i>
                                        <span><Moment fromNow>{props.makale.makale_yayintarihi}</Moment></span>
                                    </li>

                                </ul>
                            </div>

                            <div className="post-thumb mb-25">
                                <img src="/static/img/details/post.jpg" alt=""/>
                            </div>


                            <div className="post-content" dangerouslySetInnerHTML={{ __html: props.makale.makale_mesaj }} />

                            <div className="content__tags mt-30">
                                <span>Anahtar Kelimeler:</span>
                                <span className="tags-list">
                                    {props.makale.tag.map((res, index) => <p key={index}>{res}</p>)}
                                </span>
                            </div>
                            <br/>
                            <div className="share-post-link mb-30">
                                <a className="facebook" href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="twitter" href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="instagram" href="#">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>

                            <div className="author-meta  mt-60">
                                <div className="media flex-column flex-md-row">
                                    <div className="media-left">
                                        <a href="#"><img src="/static/img/user/user-03.jpg" alt=""/> </a>
                                    </div>
                                    <div className="media-body">
                                        <span className="media-heading">
                                            <a href="#">{props.makale.yazaravukat.avukat_name}</a>
                                        </span>
                                        <p>{props.makale.yazaravukat.avukat_bio}</p>
                                        <div className="social">
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a href="https://plus.google.com/discover" target="_blank">
                                                <i className="fab fa-google-plus-g"></i>
                                            </a>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="s-content__pagenav mt-60">
                                <div className="s-content__nav">
                                   <div className="row">
                                       <div className="col-md-6">
                                            <div className="s-content__prev mb-30">
                                                <a href="#0" rel="prev">
                                                    <span>Previous Post</span>
                                                     Farmers plead for bullets to put down emaciated stock
                                                </a>
                                            </div>
                                       </div>
                                       <div className="col-md-6">
                                            <div className="s-content__next mb-30 text-left text-md-right">
                                                <a href="#0" rel="next">
                                                    <span>Next Post</span>
                                                     Nahan downplays Liberal lership tensions after white ant
                                                </a>
                                            </div>
                                       </div>
                                   </div>
                                </div>
                            </div>


                            <div className="also-like mt-30">
                                <div className="section-title mb-30">
                                    <h2>Önerİlenler</h2>
                                </div>
                                <div className="row">
                                  {/* Makale sayısını 3 yapmak için index ile şart koydum. */}
                                  {props.articles.map((res, index) => index !== 3 &&

                                    <div key={index} className="col-lg-4 col-md-4">
                                        <div className="postbox mb-30">
                                            <div className="postbox__thumb">
                                                <a href={`/makale-detay?makaleid=${res.id}&makaleslug=${res.makale_slug}`} as={`/makale-detay/${res.makale_slug}/${res.id}`}>
                                                    <img className="img-100" src="/static/img/trendy/sm3.jpg" alt="hero image"/>
                                                </a>
                                            </div>
                                            <div className="postbox__text pt-10">
                                                <div className="postbox__text-meta pb-10">
                                                    <ul>
                                                        <li>
                                                            <i className="fas fa-calendar-alt"></i>
                                                            <span><Moment fromNow>{res.makale_yayintarihi}</Moment></span>
                                                        </li>

                                                    </ul>
                                                </div>
                                                <h4 className="pr-0">
                                                  <Link href={`/makale-detay?makaleid=${res.id}&makaleslug=${res.makale_slug}`}
                                                        as={`/makale-detay/${res.makale_slug}/${res.id}`}
                                                        >
                                                    <a>{res.makale_baslik}</a>
                                                  </Link>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>

                                   )}

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <div className="widget mb-40">
                            <a href="#"><img src="/static/img/add/add-sidebar.jpg" alt=""/></a>
                        </div>
                        <div className="widget widget-border mb-40">
                            <h3 className="widget-title">Popüler Yayınlar</h3>

                          {props.articles.map((res, index) =>
                            <div key={index} className={index !== 3 ? 'post__small mb-30' : 'post__small'}>
                                <div className="post__small-thumb f-left">
                                    <a href="#">
                                        <img src="/static/img/trendy/xs/xs-3.jpg" alt="hero image"/>
                                    </a>
                                </div>
                                <div className="post__small-text fix pl-10">
                                    <span className="sm-cat">
                                      <Link href={`/hukuki-yayinlar/kategori/${res.makale_kategori_nondisplay}`}>
                                        <a>
                                          {res.makale_kategori}
                                        </a>
                                      </Link>
                                    </span>
                                    <h4 className="title-13 pr-0">
                                      <Link href={`/makale-detay?makaleid=${res.id}&makaleslug=${res.makale_slug}`} as={`/makale-detay/${res.makale_slug}/${res.id}`}>
                                        <a>
                                          {res.makale_baslik}
                                        </a>
                                      </Link>
                                    </h4>
                                    <div className="post__small-text-meta">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span><Moment fromNow>{res.makale_yayintarihi}</Moment></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                          )}


                        </div>

                        <div className="widget widget-border mb-40">
                            <h3 className="widget-title">Yayın Kategorileri</h3>
                            <ul>
                                <li><Link href="/hukuki-yayinlar"><a>Tümünü Gör</a></Link></li>
                                <li><Link href="/hukuki-yayinlar?kategori=kidemtazminati" as="/hukuki-yayinlar/kategori/kidemtazminati"><a>Kıdem Tazminatı</a></Link></li>
                                <li><Link href="/hukuki-yayinlar?kategori=ihbartazminati" as="/hukuki-yayinlar/kategori/ihbartazminati"><a>İhbar Tazminatı</a></Link></li>
                                <li><Link href="/hukuki-yayinlar?kategori=iseiadedavasi" as="/hukuki-yayinlar/kategori/iseiadedavasi"><a>İşe İade Davasi</a></Link></li>
                                <li><Link href="/hukuki-yayinlar?kategori=hizmettespitdavasi" as="/hukuki-yayinlar/kategori/hizmettespitdavasi"><a>Hizmet Tespit Davası</a></Link></li>
                                <li><Link href="/hukuki-yayinlar?kategori=genelsagliksigortasi" as="/hukuki-yayinlar/kategori/genelsagliksigortasi"><a>Genel Sağlık Sigortası</a></Link></li>
                            </ul>
                        </div>

                        <div className="widget widget-border mb-40">
                            <h3 className="widget-title">En Çok Ziyaret Edilen</h3>
                            <div className="postbox">
                                <div className="postbox__thumb">
                                  <Link href={`/makale-detay?makaleid=${props.articles[0].id}&makaleslug=${props.articles[0].makale_slug}`} as={`/makale-detay/${props.articles[0].makale_slug}/${props.articles[0].id}`}>
                                    <a>
                                      <img src="/static/img/details/sidebar-post.jpg" alt="hero image"/>
                                    </a>
                                  </Link>
                                </div>
                                <div className="postbox__text pt-15">
                                    <div className="postbox__text-meta pb-10">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span><Moment fromNow>{props.articles[0].makale_yayintarihi}</Moment></span>
                                            </li>

                                        </ul>
                                    </div>
                                    <h4 className="title-16 pr-0">
                                      <Link href={`/makale-detay?makaleid=${props.articles[0].id}&makaleslug=${props.articles[0].makale_slug}`} as={`/makale-detay/${props.articles[0].makale_slug}/${props.articles[0].id}`}>
                                        <a>
                                          {props.articles[0].makale_baslik}
                                        </a>
                                      </Link>
                                    </h4>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>

        <Footer/>
      </div>
    )
  }

}

makaledetay.getInitialProps = async({query}) => {
  const {publicRuntimeConfig} = getConfig();

  let makale = query.makaleid ? await fetch(`${publicRuntimeConfig.apiEndpoint}makale/${query.makaleid}`) : "null"
  makale = makale !== 'null' ? await makale.json() : 'null'

  const resArticles = await fetch(`${publicRuntimeConfig.apiEndpoint}kategorifilter/`)
  const articles = await resArticles.json()

  return{makale, articles: articles.results}
}

export default makaledetay;
