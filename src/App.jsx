import { useState } from 'react'
import Form from './components/Form.jsx';
import CV from './components/CV.jsx';

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
        id: crypto.randomUUID(),
        schoolName: '',
        studyTitle: '',
        startDate: '',
        endDate: '',
      },
    ],

    experience: [
      {
        id: crypto.randomUUID(),
        companyName: '',
        position: '',
        responsibilities: '',
        startDate: '',
        endDate: '',
      },
    ]
  });

  function handleGeneralInfoChange(e) {
    setValues({ ...values, generalInfo: { ...values.generalInfo, [e.target.name]: e.target.value } });
  }

  function handleEducationChange(e, id) {
    setValues({
      ...values, education: values.education.map(edu => {
        if (edu.id === id)
          return { ...edu, [e.target.name]: e.target.value };
        return edu;
      })
    });
  }

  function handleAddEducation() {
    setValues({
      ...values, education: [...values.education, {
        id: crypto.randomUUID(),
        schoolName: '',
        studyTitle: '',
        startDate: '',
        endDate: '',
      }]
    });
  }

  function handleRemoveEducation(id) {
    setValues({ ...values, education: values.education.filter(edu => edu.id !== id) });
  }

  function handleExperienceChange(e, id) {
    setValues({
      ...values, experience: values.experience.map(exp => {
        if (exp.id === id)
          return { ...exp, [e.target.name]: e.target.value };
        return exp;
      })
    });
  }

  function handleAddExperience() {
    setValues({
      ...values, experience: [...values.experience, {
        id: crypto.randomUUID(),
        companyName: '',
        position: '',
        responsibilities: '',
        startDate: '',
        endDate: '',
      }]
    });
  }

  function handleRemoveExperience(id) {
    setValues({ ...values, experience: values.experience.filter(exp => exp.id !== id) });
  }

  function showCV() {
    setMode(1);
  }


  function showForm() {
    setMode(0);
  }

  if (mode === 0)
    return (
      <>
        <header className='app-header'>
          <h1>Resume Builder</h1>
          <p>Your shortcut to success</p>
        </header>
        
        <Form values={values} onGeneralInfoChange={handleGeneralInfoChange} onEducationChange={handleEducationChange} onAddEducation={handleAddEducation} onRemoveEducation={handleRemoveEducation} onExperienceChange={handleExperienceChange} onAddExperience={handleAddExperience} onRemoveExperience={handleRemoveExperience} onSubmit={showCV} />
      </>
    )

  return (
    <CV values={values} onEdit={showForm} />
  )
}

export default App
