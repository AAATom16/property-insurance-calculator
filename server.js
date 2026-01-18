// Custom server to ensure proper port and hostname binding
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const hostname = '0.0.0.0'
const port = parseInt(process.env.PORT || '3000', 10)

console.log(`Starting Next.js server on ${hostname}:${port}`)
console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
console.log(`PORT: ${port}`)

const app = next({ 
  dev: false,
  hostname,
  port
})

const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, hostname, (err) => {
    if (err) {
      console.error('Failed to start server:', err)
      process.exit(1)
    }
    console.log(`> Ready on http://${hostname}:${port}`)
  })
}).catch((err) => {
  console.error('Failed to prepare Next.js app:', err)
  process.exit(1)
})
