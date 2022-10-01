import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import styles from './Socials.module.css';

const Socials = ({ className }) => {
    return (
        <div className={`${styles.socials} ${className}`}>
            <a href='/' className={styles.social}>
                <FaLinkedinIn />
            </a>
            <a href='/' className={styles.social}>
                <BsGithub />
            </a>
        </div>
    );
};

export default Socials;
