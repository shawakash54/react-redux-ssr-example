import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

class UsersListPage extends Component {
    componentDidMount() {
        this.props.fetchUsers()
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}> {user.name} </li>
        })
    }

    render() {
        return(
            <div>
                Here's a list of users:
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return { users: state.users }
}

function loadData(store){
    return store.dispatch(fetchUsers())  //returning the netowrk promise to server index file. Promise is created by the action creator while fetching data
}

export default {
    component: connect(mapStateToProps, { fetchUsers })(UsersListPage),
    loadData
}
