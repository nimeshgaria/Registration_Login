import React from "react";
function UserDetails(props){
    return(
        <div>
{props.data.firstName}
{props.data.lastName}
{props.data.username}
{props.data.email}
        
        </div>
        
    )
}
export default UserDetails;