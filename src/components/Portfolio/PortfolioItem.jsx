import { motion } from 'framer-motion';
import styles from './Portfolio.module.css';
import Image from '../../image/portfolio1.jpg';
const PortfolioItem = ({ title, category }) => {
    return (
        <motion.a
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className={styles['portfolio-item']}
        >
            <img className={styles['portfolio-img']} src={Image} alt={title} />
            <div className={styles['portfolio-content-container']}>
                <div className={styles['border-animation']}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <h4 className={styles['portfolio-title']}>{title}</h4>
                <p className={styles['portfolio-category']}>{category}</p>
            </div>
        </motion.a>
    );
};

export default PortfolioItem;
