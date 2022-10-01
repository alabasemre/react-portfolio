import Section from '../../UI/Section';
import ClientImage from '../../image/client2.jpg';

import styles from './Testimonials.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    {
        id: 1,
        owner: 'Gleda Wilson',
        job: 'Teacher',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicingelit. Recusandae iusto tempora eligendi velaccusamus maiores temporibus veniam, ea nisi. Natusdistinctio odio totam quis sunt!',
    },
    {
        id: 2,
        owner: 'Wilson Gleda',
        job: 'Engineer',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicingelit. Recusandae iusto tempora eligendi velaccusamus maiores temporibus veniam, ea nisi. Natusdistinctio odio totam quis sunt!',
    },
    {
        id: 3,
        owner: 'Wilson EMRE',
        job: 'Computer Engineer',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, ab.',
    },
];

const Testimonials = () => {
    return (
        <Section title='reviews' className='section-bg-2'>
            <div className={`container ${styles['testimonials-container']}`}>
                <Swiper
                    grabCursor={true}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className={styles.swiper}
                >
                    {testimonials.map(({ id, owner, job, text }) => {
                        return (
                            <SwiperSlide
                                className={styles['testimonial-item']}
                                key={id}
                            >
                                <div className={styles['testimonial-img']}>
                                    <img src={ClientImage} alt='' />
                                </div>
                                <div className={styles['testimonial-content']}>
                                    <div>
                                        <h3
                                            className={
                                                styles['testimonial-owner']
                                            }
                                        >
                                            {owner}
                                        </h3>
                                        <h4
                                            className={
                                                styles['testimonial-job']
                                            }
                                        >
                                            {job}
                                        </h4>
                                    </div>

                                    <p className={styles['testimonial-text']}>
                                        {text}
                                    </p>
                                </div>
                            </SwiperSlide>
                        );
                    })}{' '}
                </Swiper>
            </div>
        </Section>
    );
};

export default Testimonials;
