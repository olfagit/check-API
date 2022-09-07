import React from 'react';

function UserDetails({users}){
  return ( 
  <div>
   {
   users.filter(user=> user.id===user?user.name:null)
   }
  </div>
  )
}
export default UserDetails