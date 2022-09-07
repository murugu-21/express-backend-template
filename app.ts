import express, { Express, json } from 'express'
import path from 'path'
import {
    handleDatabaseError,
    handleDefaultError,
    handleMongooseError,
    handleValidationError,
} from './middleware/errorHandler.middleware'
import loginRouter from './routes/api/auth.route'
import userRouter from './routes/api/user.route'
const app: Express = express()

// init middleware for express validator to be able to intercept request
app.use(json())

// Define Routes
app.use('/api/user', userRouter)
app.use('/api/auth', loginRouter)

// error handlers
app.use(handleValidationError)
app.use(handleMongooseError)
app.use(handleDatabaseError)
app.use(handleDefaultError)

export default app
