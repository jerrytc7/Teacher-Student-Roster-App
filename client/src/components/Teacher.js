import React from 'react'

function Teacher({teacher:{firstname, lastname, grade, age, id}, onDelete, setFocus}) {
    const deleteMe = async() => {
        const response = await fetch("http://localhost:3000/teachers/"+id,{
            method: "DELETE"
        })
        if(response.ok){onDelete()}
    }
    return (
        <div className="card">
            <h1>{firstname} {lastname}</h1>
            <div>Grade: {grade}</div>
            <div>Age: {age}</div>
            <div>
                <button onClick={deleteMe}>Delete</button>
                <button onClick={setFocus}>Update</button>
            </div>
        </div>
    )
}

export default Teacher
