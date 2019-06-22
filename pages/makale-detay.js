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

import apiEndpoints from '../apiEndpoints';

function makaledetay(props){

  if (props.makale === 'null') {

    return <Error />

  } else {

    return(
      <div>
        <Head>
          <title>İş Avukatım {props.makale.makale_baslik}</title>
          <meta name="description" content={props.makale.makale_meta_description}/>
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
                                        <i className="fas fa-calendar-alt"></i>
                                        <span><Moment fromNow>{props.makale.makale_yayintarihi}</Moment></span>
                                    </li>

                                </ul>
                            </div>

                            <div className="post-thumb mb-25">
                                <img className="postbox-img-843-420" src={`${apiEndpoints.mediaURL}${props.makale.image625x400}`} alt={props.makale.makale_kategori}/>
                            </div>


                            <div className="post-content" dangerouslySetInnerHTML={{ __html: props.makale.makale_mesaj }} />

                            <div className="content__tags mt-30">
                                <span>Anahtar Kelimeler:</span>
                                <span className="tags-list">
                                    {props.makale.tag.map((res, index) => <span className="makale-tags" key={index}>{res}</span>)}
                                </span>
                            </div>
                            <br/>
                            <div className="share-post-link mb-30">
                                <a>
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a>
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a>
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>

                            <div className="s-content__pagenav mt-60">
                                <div className="s-content__nav">
                                   <div className="row">
                                       <div className="col-md-6">
                                            <div className="s-content__prev mb-30">
                                              <Link href={`/makale-detay?makaleid=${props.articles[0].id}&makaleslug=${props.articles[0].makale_slug}`} as={`/makale-detay/${props.articles[0].makale_slug}/${props.articles[0].id}`}>
                                                <a>
                                                  <span>ÖNCEKİ HUKUKİ YAYIN</span>
                                                   {props.articles[0].makale_baslik}
                                                </a>
                                              </Link>
                                            </div>
                                       </div>
                                       <div className="col-md-6">
                                            <div className="s-content__next mb-30 text-left text-md-right">
                                              <Link href={`/makale-detay?makaleid=${props.articles[1].id}&makaleslug=${props.articles[1].makale_slug}`} as={`/makale-detay/${props.articles[1].makale_slug}/${props.articles[1].id}`}>
                                                <a>
                                                  <span>SONRAKİ HUKUKİ YAYIN</span>
                                                   {props.articles[1].makale_baslik}
                                                </a>
                                              </Link>
                                            </div>
                                       </div>
                                   </div>
                                </div>
                            </div>


                            <div className="also-like mt-30">
                                <div className="section-title mb-30">
                                    <h2>ÖNERİLENLER</h2>
                                </div>
                                <div className="row">
                                  {/* Makale sayısını 3 yapmak için index ile şart koydum. */}
                                  {props.articles.map((res, index) => index !== 3 &&

                                    <div key={index} className="col-lg-4 col-md-4">
                                        <div className="postbox mb-30">
                                            <div className="postbox__thumb">
                                                <a href={`/makale-detay?makaleid=${res.id}&makaleslug=${res.makale_slug}`} as={`/makale-detay/${res.makale_slug}/${res.id}`}>
                                                    <img className="img-100" src={`${apiEndpoints.mediaURL}${res.image240x160}`} alt={res.makale_kategori}/>
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
                        <div className="widget widget-border mb-40">
                            <h3 className="widget-title">Popüler Yayınlar</h3>

                          {props.articles.map((res, index) =>
                            <div key={index} className={index !== 3 ? 'post__small mb-30' : 'post__small'}>
                                <div className="post__small-thumb f-left">
                                  <Link href={`/makale-detay?makaleid=${res.id}&makaleslug=${res.makale_slug}`} as={`/makale-detay/${res.makale_slug}/${res.id}`}>
                                    <a>
                                      <img className="postbox-img-100x85" src={`${apiEndpoints.mediaURL}${res.image100x85}`} alt={res.makale_kategori}/>
                                    </a>
                                  </Link>
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
                                      <img src={`${apiEndpoints.mediaURL}${props.articles[0].image625x400}`} alt={props.articles[0].makale_kategori}/>
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
