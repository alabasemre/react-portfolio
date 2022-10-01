import styles from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

const SidebarItems = [
    { id: 0, title: 'Dashboard' },
    { id: 1, title: 'Hero' },
    { id: 2, title: 'About' },
    { id: 3, title: 'Services' },
    { id: 4, title: 'Skills' },
    { id: 5, title: 'Portfolio' },
    { id: 6, title: 'Achievements' },
    { id: 7, title: 'Reviews' },
    { id: 8, title: 'Blog' },
];

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            {SidebarItems.map(({ id, title }) => {
                return (
                    <NavLink
                        to={title.toLowerCase()}
                        key={id}
                        className={styles.link}
                    >
                        {title}
                    </NavLink>
                );
            })}
        </div>
    );
};

export default Sidebar;
