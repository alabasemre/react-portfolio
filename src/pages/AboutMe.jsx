import React from 'react';
import About from '../components/About/About';
import Timeline from '../components/Timeline/Timeline';

const aboutTextLong =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia dolores sint hic aut assumenda molestias iusto dolore aspernatur dolorum repellat! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia dolores sint hic aut assumenda molestias iusto dolore aspernatur dolorum repellat! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia dolores sint hic aut assumenda molestias iusto dolore aspernatur dolorum repellat! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia dolores sint hic aut assumenda molestias iusto dolore aspernatur dolorum repellat!';

const AboutMe = () => {
    return (
        <section>
            <div
                style={{
                    height: '91vh',
                    backgroundColor: '#1b1c1f',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}
            >
                <About text={aboutTextLong} />
            </div>

            <Timeline />
        </section>
    );
};

export default AboutMe;
