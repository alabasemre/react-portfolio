import Button from '../../UI/Button';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    return (
        <form className={styles['contact-form']}>
            <h2 className={styles['form-header']}>Leave Me A Message!</h2>
            <div className={styles['form-info']}>
                <div className={styles['input-group']}>
                    <label htmlFor='txtEmail'>Email</label>
                    <input
                        type='email'
                        name='txtEmail'
                        id='txtEmail'
                        placeholder='Enter your email'
                        className={`${styles['text-input']} ${styles['input-design']}`}
                    />
                </div>
                <div className={styles['input-group']}>
                    <label htmlFor='txtTopic'>Topic</label>
                    <input
                        type='text'
                        name='txtTopic'
                        id='txtTopic'
                        placeholder='Enter your topic'
                        className={`${styles['text-input']} ${styles['input-design']}`}
                    />
                </div>
            </div>
            <div className={styles['input-group']}>
                <label htmlFor='txtMessage'>Message</label>
                <textarea
                    name='txtMessage'
                    id='txtMessage'
                    placeholder='Enter your message'
                    className={styles['input-design']}
                />
            </div>
            <Button title={'Send Message'} className={styles['button-send']} />
        </form>
    );
};

export default ContactForm;
