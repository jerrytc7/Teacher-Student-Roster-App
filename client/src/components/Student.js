import React from 'react'

function Student({student:{firstname, lastname, grade, id},onDelete}) {

    const deleteMe = async() => {
        const response = await fetch("http://localhost:3000/students/"+id,{
            method: "DELETE"
        })
        if(response.ok){onDelete()}
    }
    return (
        <div className="card">
            <h1>{firstname} {lastname}</h1>
            <div>
                grade:{grade}
            </div>
            <button onClick={deleteMe}>Delete</button>
        </div>
    )
}

export default Student
