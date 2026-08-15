import { useState } from "react";
import GeneralInformation from "./GeneralInformation.jsx";
import Education from "./Education.jsx";

function Form({values , onGeneralInfoChange, onEducationChange, onSubmit}) {
    function handleFormSubmission(e) {
        e.preventDefault();
        onSubmit();
    }

    return (
        <form onSubmit={handleFormSubmission}>
            <GeneralInformation values={values["generalInfo"]} onChange={onGeneralInfoChange}/>
            <Education values={values["education"][0]} onChange={onEducationChange}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;