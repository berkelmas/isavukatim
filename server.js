const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()


  // Kategori olmadan; tüm makalelerin sayfalanması
  server.get('/hukuki-yayinlar/:page', (req, res) => {
      const actualPage = '/hukuki-yayinlar'
      const queryParams = { page: req.params.page }
      app.render(req, res, actualPage, queryParams)
  })

  // kategorili sorgu ile birlikte tüm makalelerin sorgulanması
  server.get('/hukuki-yayinlar/kategori/:kategori/:page', (req, res) => {
    const actualPage = '/hukuki-yayinlar'
    const queryParams = {kategori: req.params.kategori, page: req.params.page}
    app.render(req, res, actualPage, queryParams)
  })

  // Yalnızca kategori olan ancak; sayfalaması olmayan(yani 1. sayfa)
  server.get('/hukuki-yayinlar/kategori/:kategori', (req, res) => {
    const actualPage = '/hukuki-yayinlar'
    const queryParams = {kategori: req.params.kategori}
    app.render(req, res, actualPage, queryParams)
  })

  // Makale detay sayfasında makale_slug ile görüntülenmesi
  server.get('/makale-detay/:makaleslug/:makaleid', (req, res) => {
    const actualPage = '/makale-detay'
    const queryParams = {makaleslug : req.params.makaleslug, makaleid:req.params.makaleid}
    app.render(req, res, actualPage, queryParams)
  })

/*
  server.get('/arama/:title/:page', (req, res) => {
      const actualPage = '/articles'
      const queryParams = { title: req.params.title, page: req.params.page }
      app.render(req, res, actualPage, queryParams)
  })
*/

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
