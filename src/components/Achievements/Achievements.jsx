import styles from './Achievements.module.css';
import { GiSandsOfTime } from 'react-icons/gi';
import { BsFillFileCodeFill } from 'react-icons/bs';
import { FaRegSmileBeam } from 'react-icons/fa';

const achievements = [
    { id: 1, icon: <GiSandsOfTime />, count: 3, text: 'Years of experience' },
    {
        id: 2,
        icon: <BsFillFileCodeFill />,
        count: 17,
        text: 'Succesfull Projects',
    },
    { id: 3, icon: <FaRegSmileBeam />, count: 25, text: 'Happy Clients' },
];

const Achievements = () => {
    return (
        <div className={styles.achievements}>
            <div className={`container ${styles['achievements-container']}`}>
                {achievements.map(({ id, icon, count, text }) => {
                    return (
                        <div className={styles.achievement} key={id}>
                            {icon}
                            <p className={styles['achievement-count']}>
                                {count}
                            </p>
                            <p className={styles['achievement-text']}>{text}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Achievements;
