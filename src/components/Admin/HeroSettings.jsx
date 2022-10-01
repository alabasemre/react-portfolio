import React, { useState } from 'react';
import TextBox from '../../UI/TextBox';
import Button from '../../UI/Button';
import CurrentSettings from './CurrentSettings';

const currentHero = [
    { id: 1, setting: 'First Text', text: 'Hello' },
    {
        id: 2,
        setting: 'Name Text',
        text: 'I am Emre ALABAŞ',
    },
    {
        id: 3,
        setting: 'Job Text',
        text: "I'm Web Developer",
    },
];

const HeroForm = () => {
    const [first, setFirst] = useState('');
    const [name, setName] = useState('');
    const [job, setJob] = useState('');

    const states = [first, name, job];
    const setStates = [setFirst, setName, setJob];
    return (
        <div className='admin__settings admin__dashboard-container'>
            <div className='admin__settings-current'>
                <CurrentSettings
                    title='Current Hero Section'
                    data={currentHero}
                />
            </div>
            <form className='admin-form'>
                <h1 className='admin__form-title'>Hero Section Setting</h1>
                {currentHero.map(({ id, setting }, idx) => {
                    return (
                        <div className='admin__input-group' key={id}>
                            <TextBox
                                id={id}
                                name={setting.trim()}
                                text={setting}
                                value={states[idx]}
                                setValue={setStates[idx]}
                            />
                        </div>
                    );
                })}
                <Button title='Save' className='admin__submit-button' />
            </form>
        </div>
    );
};

export default HeroForm;
