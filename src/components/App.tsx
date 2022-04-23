import { ParallaxProvider } from 'react-scroll-parallax';

import { Header } from './Header';
import { Home } from './Home';
import { Footer } from './Footer';
import { Projects } from './Projects';
import { Sidebar } from './Sidebar';

import '../styles/app.css';

export const App = () => {
    return (
        <ParallaxProvider>
            <section className="app">
                <Sidebar />
                <section className="main">
                    <Header />
                    <Home />
                    <Projects />
                    <Footer />
                </section>
            </section>
        </ParallaxProvider>
    );
};
