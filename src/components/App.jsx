import { ParallaxProvider } from 'react-scroll-parallax';

import { Header } from './Header';
import { Home } from './Home';
import { Footer } from './Footer';
import { Projects } from './Projects';

import '../styles/app.css';

export const App = () => {
    return (
        <ParallaxProvider>
            <div className="app">
                <div className="sidebar"></div>
                <div>
                    <div>
                        <Header />
                    </div>
                    <div>
                        <Home />
                    </div>
                    <div>
                        <Projects />
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>
            </div>
        </ParallaxProvider>
    );
};
