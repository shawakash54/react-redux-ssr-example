import React from 'react'
// import { Route } from 'react-router-dom'
import Home from './components/Home'
import UsersList, { loadData } from './components/UsersList'

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
        component: Home,
        exact: true
    },
    {
        loadData,
        path: '/users',
        component: UsersList
    }
]
