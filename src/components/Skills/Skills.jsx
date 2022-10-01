import { motion } from 'framer-motion';
import Section from '../../UI/Section';

import styles from './Skills.module.css';

const skills = [
    { id: 1, skill: 'HTML', progress: '85%' },
    { id: 2, skill: 'CSS', progress: '80%' },
    { id: 3, skill: 'JS', progress: '75%' },
    { id: 4, skill: 'React', progress: '80%' },
    { id: 5, skill: 'NodeJS', progress: '70%' },
    { id: 6, skill: 'C#', progress: '55%' },
];

const Resume = () => {
    return (
        <Section title='skills' className='section-bg-1'>
            <motion.div
                className={`container ${styles['skills-container']}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: [-150, 0] }}
                transition={{ duration: 0.6, ease: 'linear' }}
                viewport={{ once: true }}
            >
                {skills.map(({ id, skill, progress }) => {
                    return (
                        <div key={id}>
                            <h3 className={styles['skill-name']}>{skill}</h3>
                            <div className={styles.skill}>
                                <motion.span
                                    className={styles['progress-bar']}
                                    data-progress={`${progress}`}
                                    initial={{
                                        width: 0,
                                    }}
                                    whileInView={{ width: `${progress}` }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        ease: 'linear',
                                    }}
                                ></motion.span>
                            </div>
                        </div>
                    );
                })}
            </motion.div>
        </Section>
    );
};

export default Resume;
