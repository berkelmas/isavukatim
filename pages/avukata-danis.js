import Head from 'next/head';
import TopHeader from '../components/TopHeader';
import NavbarUst from '../components/NavbarUst';
import MenuBar from '../components/MenuBar';
import Footer from '../components/Footer';

function avukatadanis(props) {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="/static/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="/static/css/fontawesome-all.min.css"/>
        <link rel="stylesheet" href="/static/css/style.css"/>
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
            <p>isavukatim.com ile işçi ve işveren tarafında kıdem tazminatı, ihbar tazminatı, işe iade davası gibi iş hukukunu ilgilendiren süreçlerinizi yönetmenizde destek oluyor ve konunuza uygun en uygun iş hukuku avukatlarımızın sizlere bu konularda destek olmalarını sağlıyoruz.</p>
            <p>İş avukatım üzerinden tüm uyuşmazlıklarınızın çözümü için web sitemizde bulunan canlı destek kısmından yararlanabilir veya bizi sabit hattımızdan arayabilirsiniz.</p>

            <a className="avukata-danis-button mb-30 mt-30" href="tel:+908508408276">Hemen Ara</a>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default avukatadanis;
