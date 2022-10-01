import Socials from '../Socials/Socials';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <div className={`container ${styles['footer-container']}`}>
                <div className={styles['footer-copyright']}>
                    ©2022 EA All Right Reserved
                </div>
                <p className={styles['footer-text']}>
                    Developed By Emre Alabaş
                </p>
                <Socials className={styles['mt-0']} />
            </div>
        </footer>
    );
};

export default Footer;
