import React from 'react'
import { renderToString } from 'react-dom/server'
import Routes from '../client/Routes'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config' //takes an array of routes objects, turns them into route components and returns them

export default (req, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    )

    return `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.INITIAL_STATE = ${JSON.stringify(store.getState())}
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `
}
