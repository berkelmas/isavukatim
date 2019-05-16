import Head from 'next/head';
import Link from 'next/link';
import Error from 'next/error';

import fetch from 'isomorphic-unfetch';
import Moment from 'react-moment';
import 'moment/locale/tr';

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


        <div className="page-title-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title text-center">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item">
                                        <Link href="/"><a>Ana Sayfa</a></Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <Link href="/hukuki-yayinlar"><a>Yayınlar</a></Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">{props.makale.makale_baslik}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <section className="post-details-area pb-30">
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
                                    <li>
                                        <i className="far fa-comment"></i>
                                        <span>(03)</span>
                                    </li>
                                </ul>
                            </div>


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
                                <a className="dribbble" href="#">
                                    <i className="fab fa-dribbble"></i>
                                </a>
                                <a className="pinterest" href="#">
                                    <i className="fab fa-pinterest-p"></i>
                                </a>
                                <a className="google-plus" href="#">
                                    <i className="fab fa-google-plus-g"></i>
                                </a>
                                <a className="pinterest" href="#">
                                    <i className="fab fa-pinterest-p"></i>
                                </a>
                            </div>


                            <div className="post-thumb mb-25">
                                <img src="/static/img/details/post.jpg" alt=""/>
                            </div>


                            <div className="post-content">
                              {props.makale.makale_mesaj}
                            </div>


                            <div className="content__tags mt-30">
                                <span>Post Tags:</span>
                                <span className="content__tags-list">
                                    <a href="#0">orci</a>
                                    <a href="#0">lectus</a>
                                    <a href="#0">varius</a>
                                    <a href="#0">turpis</a>
                                </span>
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
                                    <h2>You may also like</h2>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="postbox mb-30">
                                            <div className="postbox__thumb">
                                                <a href="#">
                                                    <img className="img-100" src="/static/img/trendy/sm1.jpg" alt="hero image"/>
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
                                                    <a href="#">Paul Manafort’s Accountant Testifies She Helped Alter Financial</a>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="postbox mb-30">
                                            <div className="postbox__thumb">
                                                <a href="#">
                                                    <img className="img-100" src="/static/img/trendy/sm2.jpg" alt="hero image"/>
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
                                                    <a href="#">Paul Manafort’s Accountant Testifies She Helped Alter Financial</a>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="postbox mb-30">
                                            <div className="postbox__thumb">
                                                <a href="#">
                                                    <img className="img-100" src="/static/img/trendy/sm3.jpg" alt="hero image"/>
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
                                                    <a href="#">Paul Manafort’s Accountant Testifies She Helped Alter Financial</a>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="post-comments mt-30">
                                <div className="section-title mb-30">
                                    <h2>Recent Comments</h2>
                                </div>
                                <div className="latest-comments">
                                    <ul>
                                        <li>
                                            <div className="comments-box">
                                                <div className="comments-avatar">
                                                    <img src="/static/img/user/user-01.jpg" alt=""/>
                                                </div>
                                                <div className="comments-text">
                                                    <div className="avatar-name">
                                                        <h5>Omar Elnagar</h5>
                                                        <span>September 13, 2018 at 10:38 AM</span>
                                                    </div>
                                                    <p>They call him Flipper Flipper faster than lightning. No one you see is smarter than he. They call
                                                        him Flipper Flipper the faster than lightning. No one you see is smarter than he</p>
                                                    <a href="#"><i className="fas fa-reply-all"></i> Reply</a>
                                                </div>
                                            </div>
                                            <ul className="comments-reply">
                                                <li>
                                                    <div className="comments-box">
                                                        <div className="comments-avatar">
                                                            <img src="/static/img/user/user-02.jpg" alt=""/>
                                                        </div>
                                                        <div className="comments-text">
                                                            <div className="avatar-name">
                                                                <h5>Omar Elnagar</h5>
                                                                <span>September 13, 2018 at 10:38 AM</span>
                                                            </div>
                                                            <p>They call him Flipper Flipper faster than lightning. No one you see is smarter than he. They
                                                                call him Flipper Flipper the faster than lightning. No one you see is smarter than he</p>
                                                            <a href="#"><i className="fas fa-reply-all"></i> Reply</a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="comments-box">
                                                <div className="comments-avatar">
                                                    <img src="/static/img/user/user-05.jpg" alt=""/>
                                                </div>
                                                <div className="comments-text">
                                                    <div className="avatar-name">
                                                        <h5>Omar Elnagar</h5>
                                                        <span>September 13, 2018 at 10:38 AM</span>
                                                    </div>
                                                    <p>They call him Flipper Flipper faster than lightning. No one you see is smarter than he. They call
                                                        him Flipper Flipper the faster than lightning. No one you see is smarter than he</p>
                                                    <a href="#"><i className="fas fa-reply-all"></i> Reply</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>


                            <div className="post-comments-form mt-40 mb-40">
                                <div className="section-title mb-30">
                                    <h2>Recent Comments</h2>
                                </div>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <input type="text" placeholder="Your Name"/>
                                        </div>
                                        <div className="col-xl-6">
                                            <input type="text" placeholder="Your Email"/>
                                        </div>
                                        <div className="col-xl-12">
                                            <textarea name="comments" id="comments" cols="30" rows="10" placeholder="Your Comments"></textarea>
                                            <button className="btn brand-btn" type="submit">Send message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <div className="widget mb-40">
                            <a href="#"><img src="/static/img/add/add-sidebar.jpg" alt=""/></a>
                        </div>
                        <div className="widget widget-border mb-40">
                            <h3 className="widget-title">Popular posts</h3>
                            <div className="post__small mb-30">
                                <div className="post__small-thumb f-left">
                                    <a href="#">
                                        <img src="/static/img/trendy/xs/xs-1.jpg" alt="hero image"/>
                                    </a>
                                </div>
                                <div className="post__small-text fix pl-10">
                                    <span className="sm-cat">
                                        <a href="#">Fashion</a>
                                    </span>
                                    <h4 className="title-13 pr-0">
                                        <a href="#">Husar asks expenses authority to entitlements after Bruno</a>
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
                                        <img src="/static/img/trendy/xs/xs-2.jpg" alt="hero image"/>
                                    </a>
                                </div>
                                <div className="post__small-text fix pl-10">
                                    <span className="sm-cat">
                                        <a href="#">Fashion</a>
                                    </span>
                                    <h4 className="title-13 pr-0">
                                        <a href="#">Researchers claim majo throug in the fight to cure fibrosis</a>
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
                                        <a href="#">Nahan downplays Liberal lership tensions after white ant</a>
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
                            <div className="post__small">
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
                                        <a href="#">Farmers plead for bullets to put down emaciated stock</a>
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
                        <div className="widget widget-border mb-40">
                            <h3 className="widget-title">Categories</h3>
                            <ul>
                                <li><a href="#">Business <span>02</span></a></li>
                                <li><a href="#">Politic <span>05</span></a></li>
                                <li><a href="#">Fashion <span>01</span></a></li>
                                <li><a href="#">Corporate <span>03</span></a></li>
                                <li><a href="#">Football <span>07</span></a></li>
                                <li><a href="#">Magazine <span>06</span></a></li>
                            </ul>
                        </div>

                        <div className="widget widget-border mb-40">
                            <h3 className="widget-title">Most visited</h3>
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
                                                <span>01 Sep 2018</span>
                                            </li>
                                            <li>
                                                <i className="far fa-comment"></i>
                                                <span>(03)</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 className="title-16 pr-0">
                                        <a href="#">Paul Manafort’s Accountant Testifies She Helped Alter Financial Documents</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="widget widget-border mb-40">
                            <h3 className="widget-title">Popular Tags</h3>
                            <div className="tagcloud">
                                <a href="#">Fashion</a>
                                <a href="#">Politic</a>
                                <a href="#">Modern</a>
                                <a href="#">Tips</a>
                                <a href="#">Nav</a>
                                <a href="#">Jason</a>
                                <a href="#">Roster</a>
                                <a href="#">Boat</a>
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
  let makale = query.makaleid ? await fetch(`http://localhost:8000/makale/${query.makaleid}`) : "null"
  makale = makale !== 'null' ? await makale.json() : 'null'
  return{makale}
}

export default makaledetay;
