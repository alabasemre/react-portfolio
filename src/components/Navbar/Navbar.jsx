import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { VscMenu } from 'react-icons/vsc';
import { HiX } from 'react-icons/hi';
import styles from './Navbar.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const menu = [
    { text: 'Anasayfa', slug: '/' },
    { text: 'Hakkımda', slug: 'about' },
    { text: 'Portföy', slug: 'portfolio' },
    { text: 'Blog', slug: 'blog' },
    { text: 'İletişim', slug: 'contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <nav>
                <NavLink to='/' className={styles.logo}>
                    Emre
                </NavLink>

                <VscMenu
                    className={styles['menu-toggle']}
                    onClick={() => setIsOpen(true)}
                />

                <div className={styles['nav-container']}>
                    <ul className={styles['nav-items']}>
                        {menu.map(({ text, slug }) => {
                            return (
                                <li key={text} className={styles['nav-item']}>
                                    <NavLink
                                        to={slug}
                                        className={({ isActive }) =>
                                            `${styles['nav-link']} ${
                                                isActive ? styles.active : ''
                                            } `
                                        }
                                    >
                                        {text}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className={styles['nav-mobile']}
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: 1, x: [300, 0] }}
                            exit={{ opacity: 0, x: [0, 300] }}
                        >
                            <HiX
                                onClick={() => setIsOpen(false)}
                                fill='white'
                                className={`${styles['menu-toggle']} ${styles['menu-toggle-close']}`}
                            />
                            <ul className={styles['nav-items']}>
                                {menu.map(({ text, slug }) => (
                                    <li
                                        key={text}
                                        className={styles['nav-item']}
                                    >
                                        <NavLink
                                            className={styles['nav-link']}
                                            to={slug}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {text}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Navbar;
