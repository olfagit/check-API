import React from 'react';
import UserCard from './UserCard';


function UsersList({users}) {
  return (
    <div style={{display: 'flex' , justifyContent:'space-between', flexWrap:'wrap', margin:'40px'}}>
    {
users.map(user=><UserCard  user={user} />)
    }
   </div>      
  )
}
export default UsersList;