import React from 'react'
// import { Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UsersListPage from './pages/UsersListPage'

// export default () => {
//     return (
//         <div>
//             <Route exact path="/" component={Home} />
//             <Route exact path="/users" component={UsersList} />
//         </div>
//     )
// }

// to make use of react router config library for ssr data loading, we need to declare routes like this instead of JSX
export default [
    {
        path: '/',
        ...HomePage,
        exact: true
    },
    {
        path: '/users',
        ...UsersListPage
    }
]
