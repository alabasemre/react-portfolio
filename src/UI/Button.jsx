const Button = ({ title, className, href }) => {
    return (
        <button className={`more-button ${className}`}>
            {href ? <a href={href}>{title}</a> : title}
        </button>
    );
};

export default Button;
