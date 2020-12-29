import Head from "next/head";
import TopHeader from "../components/TopHeader";
import NavbarUst from "../components/NavbarUst";
import MenuBar from "../components/MenuBar";
import Footer from "../components/Footer";

function avukatadanis(props) {
  return (
    <div>
      <Head>
        <title>İş Avukatım - Avukata Danış</title>
        <meta
          name="description"
          content="İş Avukatım ile iş davalarında uzman avukatlara danışın."
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

      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="avukata-danis-container col-md-8 mb-30 mt-30">
            <h1 className="avukata-danis-h1">
              İş Hukukunda Profesyonel Destek
            </h1>
            <p>
              isavukatim.com işçi ve iş veren uyuşmazlıklarında kıdem
              tazminatı,ihbar tazminatı,işe iade davaları gibi iş hukukunun
              uzmanlık gerektiren dallarında sizi bilgilendiriyor, uzman
              ekibimizle birlikte davanızın süreçlerini en başından sonuna kadar
              yönetmenizde destek oluyor ve davanıza en uygun en uzman iş hukuku
              avukatlarımızın sizlere destek olmasını sağlıyoruz.
            </p>
            <p>
              Bunların yanında isavukatim.com iş hukuku profesörleri ile
              anlaşmalı olup davanıza uygun mütala yazdırabilir ve görüş
              alabilir.
            </p>

            <p>
              Ayrıca isavukatım.com uzman arabuluculuk kadrosu ile iş hukukunda
              yeni diyebileceğimiz zorunlu arabuluculuk müessesinde arabuluculuk
              hizmeti de vermektedir.
            </p>
            <p>
              Yüksek dava kazanma oranları ve tecrübemiz ile siz değerli hukuk
              camiası ve müvekkillerimize yardımcı olmak için buradayız.
              İsavukatim.com üzerinden tüm uyuşmazlıklarınız çözümü için web
              sitemizde bulunan canlı destek kısmından yararlanabilirsiniz
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default avukatadanis;
