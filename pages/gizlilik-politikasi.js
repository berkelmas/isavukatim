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
        <meta name="description" content="İş Avukatım platformunun gizlilik politikası burada sunulmaktadır."/>
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
        <div className="row d-flex justify-content-center">
          <div className="avukata-danis-container col-md-8 mb-30 mt-30">
            <h1 className="avukata-danis-h1">Kişisel Verilerin Korunması ve Gizlilik Politikası</h1>
            <p>isvukatim.com olarak Kişisel Verilerinizin korunmasına önem verdiğimizi bu alanda yasal düzenlemelere uygun önlem ve adımları attığımızı bildirmek isteriz.</p>
            <p>Şirketimiz değerli üye ve müşterilerimiz, internet sitemizi ziyaret etmek suretiyle ya da diğer herhangi bir şekilde bizimle ilişki tesis eden diğer gerçek kişilerin kişisel verilerinin korunmasın için gerekli önlemleri almakta olup, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVK Kanunu") çerçevesinde kişisel verilerin işlenmesi ve çerez ve benzeri teknolojilerin kullanımı konusundaki Şirket kural ve politikalarımız hakkında sizleri bilgilendirmek amacı ile iş bu Kişisel Verilerin Korunması ve Gizlilik Politikasını ("Gizlilik Politikası") hazırlamış bulunmaktayız.</p>

            <p>isavukatim.com web sitesi ve mobil uygulamasında üye ve müşteri bilgilerinin gizliliği, korunması, işlenmesi, kullanımı, değiştirilmesi, iletişimler ve sair hususlarda işbu metinde yer alan gizlilik politikasına tabi olacağınızı ve internet sayfamızı her kullanışınızda koşulları kabul ettiğinizden emin olmak için bu metni gözden geçirmeniz gerektiğinizi hatırlatmak isteriz.</p>
            <p>Veri sorumlusu olarak Şirketimiz ile veri sahibinin ilişki türüne ve niteliğine göre, Şirketimiz tarafından veri sahibine iş bu metinden farklı kişisel veri politikaları ve/veya bildirimler sağlanması mümkündür. Bu durumda veri sahibine sağlanan söz konusu özel politika ve bildirimlerde işbu Gizlilik Politikasında yer alan açıklamalardan farklı veya bu açıklamalara ek hususlar bulunabilir ve veri sahibi tarafından kendisine sağlanan özel politika ve bildirimlerin öncelikle dikkate alınması gerekmektedir.</p>

          </div>
        </div>
      </div>

      <Footer/>

    </div>
  )
}


export default gizlilikpolitikasi;
