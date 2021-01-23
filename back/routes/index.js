import usersRoutes from './users.js'
import mediasRoutes from './medias.js'
import messagesRoutes from './messages.js'
import countriesRoutes from './countries.js'

export default app => {
    const routes = [...usersRoutes, ...mediasRoutes, ...messagesRoutes, ...countriesRoutes]

    routes.forEach(route => {
        app.get(route.url, route.handler)
    })
}