function CV({values, onEdit}) {
    return (
        <>
            <section className="cv-general">
                <h1>{values.generalInfo["firstName"]} {values.generalInfo["lastName"]}</h1>
                <p>{values.generalInfo["email"]}</p>
                <p>{values.generalInfo["phoneNo"]}</p>
            </section>
            
            <button type="button" onClick={onEdit}>Edit Details</button>
        </>

    )
}

export default CV;