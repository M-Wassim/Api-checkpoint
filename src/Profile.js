import React from 'react'
import "./Profile.css"

export const Profile = ({el}) => {
   
    return (
      
<div className="container">
  <div className="avatar-flip">
    <img alt="" src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" height="150" width="150"/>
    <img alt="" src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" height="150" width="150"/>
  </div>
    <h2> {el.name}</h2>
    <h4>User Name : {el.username}</h4>
    <h4> Email : {el.email}</h4>
    <p>Adress : {el.address.street},{el.address.suite},{el.address.city}</p>
    <p>Phone : {el.phone}</p>
    
</div>

       
    );
}
