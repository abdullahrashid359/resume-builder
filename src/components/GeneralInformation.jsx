import Input from "./Input.jsx";

function GeneralInformation({values, onChange}) {
    return (
        <div className="general-info">
            <Input type="text" label="First Name" name="firstName" value={values["firstName"]} placeholder="John" onChange={onChange} />
            <Input type="text" label="Last Name" name="lastName" value={values["lastName"]} placeholder="Doe" onChange={onChange} />
            <Input type="email" label="Email" name="email" value={values["email"]} placeholder="e.g. xyz@gmail.com" onChange={onChange} />
            <Input type="tel" label="Phone No." name="phoneNo" value={values["phoneNo"]} placeholder="e.g. 03xxxxxxxxx" onChange={onChange} />
        </div>
    )
}

export default GeneralInformation;