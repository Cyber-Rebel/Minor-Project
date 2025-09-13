const app = require('./src/index.js')
const PORT = process.env.PORT || 5000
require('dotenv').config()
const ConnectdDabse = require('./src/db/db.js')
ConnectdDabse();




app.listen(PORT,  () => {
    console.log(`Server is running on port ${PORT}`)
})