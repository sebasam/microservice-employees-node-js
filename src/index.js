const express = require('express')
const app = express()
const dotenv = require('dotenv')
const sequelize = require('./db/config')
const api = require('./routes/api.routes')

dotenv.config()
const port = process.env.PORT

app.use( express.json() )
app.use(express.urlencoded({ extended: false }));
app.use('/api', api)

const main = async() => {
    try {
        await sequelize.authenticate()
        console.log('Database Connection ok')
        app.listen(port, () => {
            console.log(`Server running in port ${ port }`)
        })
    } catch (error) {
        console.log(error)
    }


}

main()