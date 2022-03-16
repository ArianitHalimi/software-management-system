import Application from './application'
<<<<<<< HEAD
import config from './config/configuration';
import DatabaseConnection from './database/database.connection'
import cors from 'cors'

import IndexRoute from './api-routes/index.route'
import requestLimiter from './middlewares/rate.limit';
=======
import config from './configuration';
import DatabaseConnection from './data/database.connection'
import cors from 'cors'

import IndexRoute from './all/api-routes/index.route'
import requestLimiter from './global/middlewares/rate.limit';
>>>>>>> 4145878c4a3aba25639776c9587d8bbc8e2c3485

const app = new Application([new IndexRoute()], config.PORT, DatabaseConnection)

app.use(cors())

app.use(requestLimiter)

app.listen(() => { console.log(`Server started on port ${config.PORT}`)})