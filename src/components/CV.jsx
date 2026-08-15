function CV({ values, onEdit }) {
    return (
        <>
            <section className="cv-general">
                <h1>{values.generalInfo["firstName"]} {values.generalInfo["lastName"]}</h1>
                <p>{values.generalInfo["email"]}</p>
                <p>{values.generalInfo["phoneNo"]}</p>
            </section>


            {values.education.length > 0 && (
                <section className="cv-education">
                    <h2>Education</h2>
                    {values.education.map(edu =>
                        <section key={edu.id}>
                            <h3>{edu.studyTitle}</h3>
                            <p>{edu.startDate} --- {edu.endDate}</p>
                            <p>{edu.schoolName}</p>
                        </section>)}
                </section>
            )}

            {values.experience.length > 0 && (
                <section className="cv-experience">
                    <h2>Experience</h2>
                    {values.experience.map(exp =>
                        <section key={exp.id}>
                            <h3>{exp.position}</h3>
                            <p>{exp.startDate} --- {exp.endDate}</p>
                            <p>{exp.companyName}</p>
                            <ul>
                                {exp.responsibilities && exp.responsibilities.split("\n").map((resp, index) =>
                                    <li key={index}>{resp}</li>
                                )}
                            </ul>
                        </section>
                    )}
                </section>
            )}

            <button type="button" onClick={onEdit}>Edit Details</button>
        </>

    )
}

export default CV;