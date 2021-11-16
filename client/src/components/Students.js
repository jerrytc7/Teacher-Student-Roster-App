import React, { useState, useEffect } from "react";
import Student from "./Student";

function Students() {
    const [students, setStudents] = useState([]);
    const [formData, setFormData] =useState([]);
    useEffect(() => {
      fetch("http://localhost:3000/students")
        .then((res) => res.json())
        .then((data) => setStudents(data));
    }, []);
    
    let formElements = [{
      label: "Name",
      key: "name",
      type: "string"
    },{
      label: "Grade",
      key: "grade",
      type: "number"
    }]

    const handleChange = (value, key) => {
      setFormData({...formData, [key]: value})
    }

    const submit = async(e) => {
      e.preventDefault()
      const response = await fetch("http://localhost:3000/students/",{
        method: "POST",
        body: JSON.stringify(formData), 
        headers: { 'Content-Type': 'application/json' }
      })
      const data = await response.json()
      setStudents([...students,data])
    }
  
    return (
      <div>
        <form>
          Here is my teacher form:
          {formElements.map((formElement) => {
            return(<div>
              {formElement.label}
              <input type={formElement.type} value={formData[formElement.key]} onChange={(e)=> {handleChange(e.target.value, formElement.key)}}/>
            </div>)
          })}
          <button onClick={submit}>Submit</button>
        </form>
        <div className="card-container">
          {students.map(student => <Student student={student} onDelete={() =>{setStudents(students.filter((s) => {return student.id !== s.id}))}}/>)}  
        </div>
      </div>
    );
}
export default Students