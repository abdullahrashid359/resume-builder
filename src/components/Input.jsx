function Input({type, label, name, value, placeholder, onChange}) {
    return (
        <label>
            {label}
            {' '}
            <input type={type} value={value} name={name} placeholder={placeholder} onChange={onChange}/>
        </label>
    )
}

export default Input;