import Application from './application'
import config from './configuration';
import DatabaseConnection from './data/database.connection'
import cors from 'cors'

import IndexRoute from './all/api-routes/index.route'
import requestLimiter from './global/middlewares/rate.limit';

const app = new Application([new IndexRoute()], config.PORT, DatabaseConnection)

app.use(cors())

app.use(requestLimiter)

app.listen(() => { console.log(`Server started on port ${config.PORT}`)})