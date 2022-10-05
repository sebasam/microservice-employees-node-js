const express = require('express')
const app = express()
const sequelize = require('./src/db/config')
const api = require('./src/routes/api.routes')
const cors = require('cors')

const port = 1234

const corsOptions = {
    origin: '*',
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))
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