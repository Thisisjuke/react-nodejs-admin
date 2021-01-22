import usersRoutes from './users.js'
import mediasRoutes from './medias.js'
import messagesRoutes from './messages.js'

export default app => {
    const routes = [...usersRoutes, ...mediasRoutes, ...messagesRoutes]

    routes.forEach(route => {
        app.get(route.url, route.handler)
    })
}