import React, { useState } from 'react';
import TextBox from '../../UI/TextBox';
import Button from '../../UI/Button';
import CurrentSettings from './CurrentSettings';
import Image from '../../image/about.jpg';

const currentAbout = [
    { id: 1, setting: 'About Header', text: "i'm Emre" },
    {
        id: 2,
        setting: 'About HomePage Text',
        text: '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia dolores sint hic aut assumenda molestias iusto dolore aspernatur dolorum repellat!',
    },
    {
        id: 3,
        setting: 'About Page Text',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia dolores sint hic aut assumenda molestias iusto dolore aspernatur dolorum repellat! Lorem ipsum    dolor, sit amet consectetur adipisicing elit. Quia dolores sint hic aut assumenda molestias iusto dolore aspernatur dolorum repellat! Lorem ipsum dolor, sit amet    consectetur adipisicing elit. Quia dolores sint hic aut assumenda molestias iusto dolore aspernatur dolorum repellat! Lorem ipsum dolor, sit amet consectetur    adipisicing elit. Quia dolores sint hic aut assumenda molestias iusto dolore aspernatur dolorum repellat!',
    },
    { id: 4, setting: 'Name', text: 'Emre Alabaş' },
    { id: 5, setting: 'Email', text: 'ea.appdev18@gmail.com' },
];

const AboutSettings = () => {
    const [aboutHeader, setAboutHeader] = useState('');
    const [homeText, setHomeText] = useState('');
    const [pageText, setPageText] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const states = [aboutHeader, homeText, pageText, name, email];
    const setStates = [
        setAboutHeader,
        setHomeText,
        setPageText,
        setName,
        setEmail,
    ];

    return (
        <div className='admin__settings admin__dashboard-container'>
            <div className='admin__settings-current'>
                <CurrentSettings
                    title='Current About Section'
                    data={currentAbout}
                />
                <div className='admin__settings-group'>
                    <h4>About Image</h4>
                    <img src={Image} alt='about' className='admin__about-img' />
                </div>
            </div>
            <form className='admin-form admin__form-sticky'>
                <h1 className='admin__form-title'>About Settings</h1>
                {currentAbout.map(({ id, setting }, idx) => {
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
                <div className='admin__input-group'>
                    <label htmlFor='aboutImage' className='textbox-label'>
                        About Image
                    </label>
                    <input
                        type='file'
                        name='aboutImage'
                        id='aboutImage'
                        style={{ marginTop: 10, outline: 'none' }}
                    />
                </div>
                <Button title='Save' className='admin__submit-button' />
            </form>
        </div>
    );
};

export default AboutSettings;
