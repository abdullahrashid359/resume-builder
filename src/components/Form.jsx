import { useState } from "react";
import GeneralInformation from "./GeneralInformation.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";

function Form({values , onGeneralInfoChange, onEducationChange, onAddEducation, onRemoveEducation, onExperienceChange, onAddExperience, onRemoveExperience, onSubmit}) {
    
    function handleFormSubmission(e) {
        e.preventDefault();
        onSubmit();
    }

    return (
        <form onSubmit={handleFormSubmission}>
            <GeneralInformation values={values["generalInfo"]} onChange={onGeneralInfoChange}/>

            {values.education.map(edu => <Education key={edu.id} values={edu} onChange={(e) => onEducationChange(e, edu.id)} onRemove={() => onRemoveEducation(edu.id)}/>)}
            <button type="button" onClick={onAddEducation}>Add Education</button>

            {values.experience.map(exp => <Experience key={exp.id} values={exp} onChange={(e) => onExperienceChange(e, exp.id)} onRemove={() => onRemoveExperience(exp.id)}/>)}
            <button type="button" onClick={onAddExperience}>Add Experience</button>

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;