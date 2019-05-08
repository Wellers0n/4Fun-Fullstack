import koa from 'koa';
import route from 'koa-router'
import logger from 'koa-logger'
import json from 'koa-json'
import bodyparser from 'koa-bodyparser'
import cors from 'kcors'
import dotenv from 'dotenv-safe'
const graphqlHTTP = require("koa-graphql");
import schema from './schema'
import mongoose from 'mongoose';


// init router and koa
const app = new koa();
const router = new route()
//init doenv
dotenv.load()

// middlewares
app.use(logger())
app.use(cors())
app.use(json())
app.use(bodyparser())
app.use(router.routes())
app.use(router.allowedMethods());

// init mongoose
mongoose.connect('mongodb://localhost:27017/planet', { useNewUrlParser: true });

export function greeter(person: string) {
    return "Hello, " + person;
}

router.all('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(process.env.PORT || 5000,() => {
    return console.log(`SERVER ON: http://localhost:${process.env.PORT || 5000}/graphql`)
})

