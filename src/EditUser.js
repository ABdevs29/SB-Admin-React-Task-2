import React from 'react'

function EditUser(props) {

    console.log(props)
    return (
        <div>
            <h1>User Data:{props.match.params.id} </h1>
        </div>
    )
}

export default EditUser
