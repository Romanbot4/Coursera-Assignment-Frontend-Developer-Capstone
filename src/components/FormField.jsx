const FormField = ({ children, label, htmlFor, error }) => {
    return (
        <div className="form-field">
            <label htmlFor={htmlFor} className="text-lg font-bold">{label}</label>
            {children}
            {
                error && <p className="form-error text-sm" id={`${htmlFor}-error`} role="alert">{error}</p>
            }
        </div>
    );
}

export default FormField;
