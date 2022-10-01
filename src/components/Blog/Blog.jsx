import Section from '../../UI/Section';

import styles from './Blog.module.css';
import Image from '../../image/portfolio1.jpg';
import Button from '../../UI/Button';

const blogs = [
    {
        id: 1,
        img: Image,
        title: 'React 18',
        slug: 'react-18',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque id non nulla expedita eum. Esse?',
        category: 'Web Development',
        date: '25 Mayıs',
        author: 'Emre Alabaş',
    },
    {
        id: 2,
        img: Image,
        title: 'Arduino',
        slug: 'arduino',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque id non nulla expedita eum. Esse? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque id non nulla expedita eum. Esse? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque id non nulla expedita eum. Esse?',
        category: 'Gömülü Sistemler',
        date: '25 Haziran',
        author: 'Oğuz Doğan',
    },
    {
        id: 3,
        img: Image,
        title: 'What is prisma',
        slug: 'what-is-prisma',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        category: 'Backend Development',
        date: '29 Ekim',
        author: 'Serkan Alabaş',
    },
];

const Blog = ({ showBtn }) => {
    return (
        <Section title='blog' className='section-bg-1'>
            <div className={`container ${styles['blog-container']}`}>
                {blogs.map(
                    ({ id, img, title, content, category, date, author }) => {
                        return (
                            <div className={styles['blog-item']} key={id}>
                                <div>
                                    <img
                                        src={img}
                                        alt='thumb'
                                        className={styles['blog-img']}
                                    />
                                    <h4 className={styles['blog-title']}>
                                        {title}
                                    </h4>
                                    <p className={styles['blog-content']}>
                                        {content}
                                    </p>
                                </div>

                                <p className={styles['blog-author']}>
                                    <span>{author}</span> {date}
                                </p>
                                <p className={styles['blog-category']}>
                                    {category}
                                </p>
                            </div>
                        );
                    }
                )}
            </div>
            {showBtn && <Button title='More Blog' className='mt-3' href='/' />}
        </Section>
    );
};

export default Blog;
