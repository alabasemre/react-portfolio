import Socials from '../Socials/Socials';

import AboutImg from '../../image/about.jpg';
import styles from './About.module.css';
import { motion } from 'framer-motion';

const About = ({ text }) => {
    return (
        <section className={styles.about}>
            <div className={`container ${styles['about-container']}`}>
                <motion.div
                    className={styles['about-image-container']}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, x: [-300, 0] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'linear' }}
                >
                    <img
                        src={AboutImg}
                        alt='about emre alabas'
                        className={styles['about-image']}
                    />
                </motion.div>
                <motion.div
                    className={styles['about-content']}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, x: [300, 0] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'linear' }}
                >
                    <div className={styles['about-heading']}>
                        <h2>About me</h2>
                        <span>i'm Emre</span>
                    </div>
                    <p className={styles['about-text']}>{text}</p>
                    <div className={styles.info}>
                        <p>
                            <span>Name: </span>Emre Alabaş
                        </p>
                        <p>
                            <span>Email: </span>xxxxxxxxxx@mail.com
                        </p>
                    </div>
                    <Socials className={styles['social-center']} />
                </motion.div>
            </div>
        </section>
    );
};

export default About;
