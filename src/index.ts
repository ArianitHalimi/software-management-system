import Application from './application'
import config from './config/configuration';
import DatabaseConnection from './database/database.connection'
import cors from 'cors'

import IndexRoute from './api-routes/index.route'
import requestLimiter from './middlewares/rate.limit';

const app = new Application([new IndexRoute()], config.PORT, DatabaseConnection)

app.use(cors())

app.use(requestLimiter)

app.listen(() => { console.log(`Server started on port ${config.PORT}`)})