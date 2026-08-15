import Input from "./Input.jsx";

function Education({values, onChange}) {
    return(
        <div className="education-info">
            <Input type="text" label="School/University Name" name="schoolName" value={values["schoolName"]} placeholder="e.g. Pucit" onChange={onChange}/>
            <Input type="text" label="Title of Study" name="studyTitle" value={values["studyTitle"]} placeholder="e.g. Bacholors of Science in Computer Science" onChange={onChange}/>
            <Input type="date" label="Start Date" name="startDate" value={values["startDate"]} placeholder="" onChange={onChange}/>
            <Input type="date" label="End Date" name="endDate" value={values["endDate"]} placeholder="" onChange={onChange}/>
            <button type="button">Remove</button>
        </div>
    )
}

export default Education;