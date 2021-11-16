import React, { useState, useEffect } from "react";
import Teacher from "./Teacher";

function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [formData, setFormData] = useState([]);
  const [focusedTeacher, setFocusedTeacher] =useState(-1);
  useEffect(() => {
    fetch("http://localhost:3000/teachers")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);

  let formElements = [{
    label: "Name",
    key: 'name',
    type: 'text'
  }, {
    label: "Age",
    key: 'age',
    type: 'number'
  }, {
    label: "Grade",
    key: 'grade',
    type: 'number'
  }]

  const handleChange = (value, key) => {
    setFormData({ ...formData, [key]: value })
  }

  const submit = async(e) => {
    e.preventDefault()
    const response = await fetch("http://localhost:3000/teachers/"+(focusedTeacher===-1?"":focusedTeacher),{
      method: focusedTeacher===-1?"POST":"PUT",
      body: JSON.stringify(formData), 
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await response.json()
    setFormData({
      name:"",
      age:"",
      grade:""
    })
    setFocusedTeacher(-1)
    setTeachers([...teachers.filter((teacher)=>{return teacher.id!==data.id}),data])
  }

  const focusTeacher = (teacher) => {
    setFormData(teacher)
    setFocusedTeacher(teacher.id)
  }

  return (
    <div>
      <form>
        Create a New Teacher Here:
        {formElements.map(formElement => {
          return <div>
            {formElement.label}
            <input type={formElement.type} value={formData[formElement.key]} onChange={(e) => { handleChange(e.target.value, formElement.key) }} />
          </div>
        })}
        <button onClick={submit}>Submit</button>
      </form>
      <div className="card-container">
        {teachers.map(teacher => <Teacher teacher={teacher} onDelete={() => {setTeachers(teachers.filter((t)=>{return teacher.id !== t.id}))} } setFocus={()=>focusTeacher(teacher)} />)}
      </div>
    </div>
  );
}
export default Teachers