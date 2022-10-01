import Section from '../../UI/Section';
import styles from './Timeline.module.css';

const timelineItems = [
    {
        id: 1,
        date: 2018,
        title: 'Gazi Üniversitesi',
        text: 'Gazi Üniversitesi Bilgisayar Programcılığı bölümünde okumaya başladım',
    },
    {
        id: 2,
        date: 2020,
        title: 'Gazi Üniversitesi',
        text: 'Gazi Üniversitesi Bilgisayar Programcılığı bölümünden bölüm birinciliği ile mezun oldum.',
    },
    {
        id: 3,
        date: 2020,
        title: 'Ankara Üniversitesi',
        text: 'Ankara Üniversitesi Bilgisayar Mühendisliği bölümüne DGS ile geçiş yaptım.',
    },
];

const Timeline = () => {
    const orderedItems = timelineItems.sort((a, b) => b.date - a.date);

    return (
        <Section className='section-bg-2' title='Timeline'>
            <div className={`${styles['timeline-container']}`}>
                {orderedItems.map(({ id, date, title, text }, idx) => {
                    return (
                        <div
                            className={`${styles['timeline-card']} ${
                                idx % 2 === 0 ? styles.left : styles.right
                            }`}
                            key={id}
                        >
                            <span
                                className={`${styles['timeline-dot']} ${
                                    idx % 2 === 0
                                        ? styles['dot-right']
                                        : styles['dot-left']
                                }`}
                            ></span>
                            <p className={styles['timeline-date']}>{date}</p>
                            <h3 className={styles['timeline-title']}>
                                {title}
                            </h3>
                            <p className={styles['timeline-text']}>{text}</p>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
};

export default Timeline;
