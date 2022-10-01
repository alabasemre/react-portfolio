import About from '../components/About/About';
import Hero from '../components/Hero/Hero';
import Skills from '../components/Skills/Skills';
import Services from '../components/Services/Services';
import Portfolio from '../components/Portfolio/Portfolio';
import Achievements from '../components/Achievements/Achievements';
import Testimonials from '../components/Testimonials/Testimonials';
import Blog from '../components/Blog/Blog';

const aboutTextShort =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia dolores sint hic aut assumenda molestias iusto dolore aspernatur dolorum repellat!';

const Home = () => {
    return (
        <main>
            <Hero />
            <About text={aboutTextShort} />
            <Services />
            <Skills />
            <Portfolio showBtn={true} itemCount={8} />
            <Achievements />
            <Testimonials />
            <Blog showBtn={true} />
        </main>
    );
};

export default Home;
