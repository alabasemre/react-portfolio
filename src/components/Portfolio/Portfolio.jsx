import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Button from '../../UI/Button';
import Section from '../../UI/Section';
import styles from './Portfolio.module.css';
import PortfolioItem from './PortfolioItem';

const portfolioItems = [
    { id: 1, category: 'web', title: 'Todo App' },
    { id: 2, category: 'web', title: 'Todo App' },
    { id: 3, category: 'mobile', title: 'Instagram Clone' },
    { id: 4, category: 'mobile', title: 'Facebook Clone' },
    { id: 5, category: 'web', title: 'Reddit' },
    { id: 6, category: 'game', title: 'Block Breaker' },
];

const categories = ['all', 'web', 'mobile', 'game'];

const Portfolio = ({ showBtn, fullHeight, itemCount }) => {
    const [category, setCategory] = useState('all');
    const [activeItems, setActiveItems] = useState(portfolioItems);

    useEffect(() => {
        if (category === 'all') {
            setActiveItems(portfolioItems.slice(0, itemCount));
            return;
        }

        let items = portfolioItems.filter((item) => item.category === category);
        setActiveItems(items.slice(0, itemCount));
    }, [category, itemCount]);

    return (
        <Section
            title='portfolio'
            className={`section-bg-2 ${fullHeight ? 'min-height-full' : ''}`}
        >
            <div className={`container ${styles['portfolio-container']}`}>
                <div className={styles['filter']}>
                    {categories.map((item) => {
                        return (
                            <button
                                key={item}
                                className={`${styles['filter-button']} ${
                                    category === item
                                        ? styles['filter-active']
                                        : ''
                                }`}
                                onClick={() => setCategory(item)}
                            >
                                {item}
                            </button>
                        );
                    })}
                </div>
                {activeItems?.length > 0 ? (
                    <AnimatePresence>
                        <motion.div
                            layout
                            className={styles['portfolio-items']}
                        >
                            {activeItems.map(({ id, title, category }) => (
                                <PortfolioItem
                                    key={id}
                                    title={title}
                                    category={category}
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                ) : (
                    <p>Portfolio not exist!</p>
                )}
                {showBtn && (
                    <Button title='More Projects' className='mt-3' href='/' />
                )}
            </div>
        </Section>
    );
};

export default Portfolio;
