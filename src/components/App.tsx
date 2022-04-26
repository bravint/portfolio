import { ParallaxProvider } from 'react-scroll-parallax';

import { About } from './About';
import { Header } from './Header';
import { Home } from './Home';
import { Footer } from './Footer';
import { Projects } from './Projects';
import { Sidebar } from './Sidebar';
import { Stack } from './Stack';


import '../styles/app.css';

export const App = () => {
    return (
        <ParallaxProvider>
            <section className="app">
                <Sidebar />
                <section className="main">
                    <Header />
                    <Home />
                    {/* <About />
                    <Stack /> */}
                    <Projects />
                    <Footer />
                </section>
            </section>
        </ParallaxProvider>
    );
};
