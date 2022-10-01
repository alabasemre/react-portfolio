import React from 'react';
import SectionHeader from './SectionHeader';

const Section = ({ title, children, className }) => {
    return (
        <section className={`home__section-container ${className}`}>
            <SectionHeader title={title} />
            {children}
        </section>
    );
};

export default Section;
