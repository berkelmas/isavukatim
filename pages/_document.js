import Document, { Head, Main, NextScript, Html } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Import CSS for nprogress */}
          <link
            rel="shortcut icon"
            type="image/png"
            href="/static/img/isavukatimfavicon.png"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/nprogress.css"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/5d0e9d1653d10a56bd7b64b2/default';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
