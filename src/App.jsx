import { useState } from 'react'
import Form from './components/Form.jsx';
import CV from './components/CV.jsx';
import './App.css'

function App() {
   const [mode, setMode] = useState(0) // 0 for editing, 1 for submission
   const [values, setValues] = useState({
        generalInfo: {
          firstName: '',
          lastName: '',
          email: '',
          phoneNo: '',
        },

        education: [
          {
            schoolName: '',
            studyTitle: '',
            startDate: '',
            endDate: '',
          },
        ],
    });

    function handlegGeneralInfoChange(e) {
        console.log(e.target.name, e.target.value);
        setValues({...values, ["generalInfo"]: {...values.generalInfo, [e.target.name]: e.target.value}});
    }

    function handleEducationChange(e, idx) {
      
    }

    function showCV() {
      setMode(1);
    }


    function showForm() {
      setMode(0);
    }
    
    if(mode === 0)
      return (
        <Form values={values} onGeneralInfoChange={handlegGeneralInfoChange} onEducationChange={handleEducationChange} onSubmit={showCV}/>
      )
      
    return (
      <CV values={values} onEdit={showForm}/>

    )
}

export default App
