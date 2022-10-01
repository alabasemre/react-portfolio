import React from 'react';

const CurrentSettings = ({ title, data }) => {
    return (
        <>
            <h1>{title}</h1>
            {data.map(({ id, setting, text }) => (
                <div className='admin__settings-group' key={id}>
                    <h4>{setting}</h4>
                    <p>{text}</p>
                </div>
            ))}
        </>
    );
};

export default CurrentSettings;
