import React, { useContext } from 'react'
import { Context } from '../context/context'
import Loader from './Loader'
import User from './User'

function Users() {
    const {users,loading} = useContext(Context)
    if (loading) {
        return <Loader />
    }
  return (
    <div className='users container'>
        {users.map((user)=>(
            <User key={user.id} user={user} />
        ))}
    </div>
  )
}

export default Users