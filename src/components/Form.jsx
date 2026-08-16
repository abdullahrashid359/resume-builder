import { useState } from "react";
import GeneralInformation from "./GeneralInformation.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import "../styles/form.css"

function Form({values , onGeneralInfoChange, onEducationChange, onAddEducation, onRemoveEducation, onExperienceChange, onAddExperience, onRemoveExperience, onSubmit}) {

    function handleFormSubmission(e) {
        e.preventDefault();
        onSubmit();
    }

    return (
        <form className="cv-form" onSubmit={handleFormSubmission}>
            <h2>General Information</h2>
            <GeneralInformation values={values["generalInfo"]} onChange={onGeneralInfoChange}/>

            <h2>Education</h2>
            {values.education.map(edu => <Education key={edu.id} values={edu} onChange={(e) => onEducationChange(e, edu.id)} onRemove={() => onRemoveEducation(edu.id)}/>)}
            <button type="button" onClick={onAddEducation}>+ Add Education</button>

            <h2>Experience</h2>
            {values.experience.map(exp => <Experience key={exp.id} values={exp} onChange={(e) => onExperienceChange(e, exp.id)} onRemove={() => onRemoveExperience(exp.id)}/>)}
            <button type="button" onClick={onAddExperience}>+ Add Experience</button>

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;