import formatDate from "../utils/formatDate";
import "../styles/cv.css";

function CV({ values, onEdit }) {
    return (
        <>
            <div className="cv-page">
                <section className="cv-general">
                    <h1>{values.generalInfo["firstName"]} {values.generalInfo["lastName"]}</h1>
                    <p>{values.generalInfo["email"]}</p>
                    <p>{values.generalInfo["phoneNo"]}</p>
                </section>


                {values.education.length > 0 && (
                    <section className="cv-education">
                        <h2>Education</h2>
                        {values.education.map(edu =>
                            <section key={edu.id} className="cv-entry">
                                <div className="cv-entry-header">
                                    <h3>{edu.studyTitle}</h3>
                                    <p>{formatDate(edu.startDate)} — {formatDate(edu.endDate)}</p>
                                </div>
                                <p className="cv-company">{edu.schoolName}</p>
                            </section>)}
                    </section>
                )}

                {values.experience.length > 0 && (
                    <section className="cv-experience">
                        <h2>Experience</h2>
                        {values.experience.map(exp =>
                            <section key={exp.id} className="cv-entry">
                                <div className="cv-entry-header">
                                    <h3>{exp.position}</h3>
                                    <p>{formatDate(exp.startDate)} — {formatDate(exp.endDate)}</p>
                                </div>
                                <p className="cv-company">{exp.companyName}</p>
                                <ul>
                                    {exp.responsibilities && exp.responsibilities.split("\n").map((resp, index) =>
                                        <li key={index}>{resp}</li>
                                    )}
                                </ul>
                            </section>
                        )}
                    </section>
                )}

            </div>

            <button type="button" onClick={onEdit}>Edit Details</button>
        </>

    )
}

export default CV;