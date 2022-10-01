import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

import { options } from './particleOptions';
import styles from './Hero.module.css';
import Socials from '../Socials/Socials';

const Hero = () => {
    const particlesInit = useCallback(async (engine) => {
        // console.log(engine);

        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        // await console.log(container);
    }, []);
    return (
        <section className={styles.hero}>
            <Particles
                className={styles.particles}
                id='tsparticles'
                init={particlesInit}
                loaded={particlesLoaded}
                options={options}
            />

            <div className={`${styles['hero-content']} container`}>
                <p className={styles['hero-p-sm']}> Hello</p>
                <p className={styles['hero-p-md']}>
                    {/* I am <span>Emre</span> ALABAŞ */}I am Emre ALABAŞ
                </p>
                <div className={styles['hero-job']}>
                    <span>I'm Web Developer</span>
                </div>
                <Socials />
            </div>
        </section>
    );
};

export default Hero;
