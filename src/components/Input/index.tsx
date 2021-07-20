import style from './style.module.scss'

function Input({
    id,
    label,
    value,
    type,
    error,
    maxLength,
    onKeyUp,
    onFocus,
    onBlur,
    placeholder,
}: any) {
    return (
        <>
            <label className={style.label} htmlFor={id}>{label}</label>
            <input className={`${style.input} ${error && style.isInvalid}`} data-testid="inputTest"
                id={id}
                name={id}
                defaultValue={value}
                type={type}
                maxLength={maxLength}
                onKeyUp={onKeyUp}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder={placeholder}
            />
            {<p className={style.error}>{error && error}</p>}
        </>
    );
};

export default Input