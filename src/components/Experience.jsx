import { Input, TextArea} from "./Input.jsx"

function Experience({values, onChange, onRemove}) {
    return (
        <section className="experience-info form-section">
            <h2>Experience</h2>
            <Input type="text" label="Company Name" name="companyName" value={values["companyName"]} placeholder="e.g. Systems Limited" onChange={onChange}/>
            <Input type="text" label="Job Title" name="position" value={values["position"]} placeholder="e.g. Full Stack Engineer" onChange={onChange}/>
            <TextArea label="Responsibilities" name="responsibilities" value={values["responsibilities"]} onChange={onChange} placeholder="Describe your responsibilities briefly (one per line)"/>
            <Input type="date" label="Start Date" name="startDate" value={values["startDate"]} placeholder="" onChange={onChange}/>
            <Input type="date" label="End Date" name="endDate" value={values["endDate"]} placeholder="" onChange={onChange}/>
            <button type="button" onClick={onRemove}>Remove</button>
        </section>
    )
}

export default Experience;