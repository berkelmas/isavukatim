import Head from 'next/head';

import TopHeader from '../components/TopHeader';
import NavbarUst from '../components/NavbarUst';
import MenuBar from '../components/MenuBar';

import Footer from '../components/Footer';

function gizlilikpolitikasi(props) {
  return (
    <div>
      <Head>
        <title>İş Avukatım - Gizlilik Politikası</title>
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

      <div className="container">
        <div className="row">
          <div className="avukata-danis-container col-md-12 mb-30 mt-30">
            <h1 className="avukata-danis-h1">İş Hukukunda Profesyonel Destek</h1>
            <p>isavukatim.com işçi ve iş veren uyuşmazlıklarında kıdem tazminatı,ihbar tazminatı,işe iade davaları gibi iş hukukunun uzmanlık gerektiren dallarında sizi bilgilendiriyor, uzman ekibimizle birlikte davanızın süreçlerini en başından sonuna kadar yönetmenizde destek oluyor ve davanıza en uygun en uzman iş hukuku avukatlarımızın sizlere destek olmasını sağlıyoruz.</p>
            <p>Bunların yanında isavukatim.com iş hukuku profesörleri ile anlaşmalı olup davanıza uygun mütala yazdırabilir ve görüş alabilir.</p>

            <p>Ayrıca isavukatım.com uzman arabuluculuk kadrosu ile iş hukukunda yeni diyebileceğimiz zorunlu arabuluculuk müessesinde arabuluculuk hizmeti de vermektedir.</p>
            <p>Yüksek dava kazanma oranları ve tecrübemiz ile siz değerli hukuk camiası ve müvekkillerimize yardımcı olmak için buradayız.
            İsavukatim.com üzerinden tüm uyuşmazlıklarınız çözümü için web sitemizde bulunan canlı destek kısmından yararlanabilir veya bizi sabit hattımızdan arayabilirsiniz.</p>

            <div className="avukata-danis-button-container">
              <a className="avukata-danis-button mb-30 mt-30" href="tel:+908508408276">Hemen Ara</a>
            </div>
          </div>
        </div>
      </div>

      <Footer/>

    </div>
  )
}


export default gizlilikpolitikasi;
