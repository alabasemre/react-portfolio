const TextBox = ({ id, name, text, value, setValue }) => {
    return (
        <>
            <label htmlFor={id} className='textbox-label'>
                {text}
            </label>
            <input
                className='textbox-admin'
                type='text'
                id={id}
                name={name}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </>
    );
};

export default TextBox;
