import { motion } from 'framer-motion';
import Section from '../../UI/Section';

import styles from './Services.module.css';

const services = [
    {
        id: 1,
        title: 'Web Development',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorum illo officia voluptatum omnis explicabo.',
    },
    {
        id: 2,
        title: 'Web Development',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorum illo officia voluptatum omnis explicabo.',
    },
    {
        id: 3,
        title: 'Web Development',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorum illo officia voluptatum omnis explicabo.',
    },
    {
        id: 4,
        title: 'Web Development',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorum illo officia voluptatum omnis explicabo.',
    },
    {
        id: 5,
        title: 'Web Development',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorum illo officia voluptatum omnis explicabo.',
    },
    {
        id: 6,
        title: 'Web Development',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorum illo officia voluptatum omnis explicabo.',
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
    viewport: { once: true },
};

const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, y: [-100, 0] },
};

const Services = () => {
    return (
        <Section title='Services' className='section-bg-2'>
            <motion.div
                className={`container ${styles['services-container']}`}
                variants={container}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
            >
                {services.map(({ id, title, text }) => {
                    return (
                        <motion.div
                            className={styles.service}
                            key={id}
                            variants={item}
                            viewport={{ once: true }}
                        >
                            <h3 className={styles['service-title']}>{title}</h3>
                            <p className={styles['service-text']}>{text}</p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </Section>
    );
};

export default Services;
