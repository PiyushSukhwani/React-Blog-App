import React from "react";
import { useParams } from "react-router-dom";


function User () {

    const {userid} = useParams()
    return (
        <div className="text-center text-3xl font-bold bg-gray-400 py-4">User:{userid}</div>
    )
}

export default User

