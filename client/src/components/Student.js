import React from 'react'

function Student({student:{name, grade, id},onDelete}) {

    const deleteMe = async() => {
        const response = await fetch("http://localhost:3000/students/"+id,{
            method: "DELETE"
        })
        if(response.ok){onDelete()}
    }
    return (
        <div className="card">
            <h1>{name}</h1>
            <div>
                grade:{grade}
            </div>
            <button onClick={deleteMe}>Delete</button>
        </div>
    )
}

export default Student
