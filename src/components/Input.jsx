function TextArea({label, name, className, value, placeholder, onChange}) {
    return (
        <label className={className}>
            {label}
            {' '}
            <textarea value={value} name={name} placeholder={placeholder} onChange={onChange} required></textarea>
        </label>
    )
}

function Input({type, label, name, value, placeholder, onChange}) {
    return (
        <label>
            {label}
            {' '}
            <input type={type} value={value} name={name} placeholder={placeholder} onChange={onChange} required/>
        </label>
    )
}

export { Input, TextArea };