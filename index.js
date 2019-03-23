const server = require('./server/server.js')

const port = 7000

server.listen(port, () =>
    console.log(`API server running on port ${port}`))