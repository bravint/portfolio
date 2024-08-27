import { About } from './About';
import { Footer } from './Footer';
import { Header } from './Header';
import { Projects } from './Projects';
import { Splash } from './Splash';
import { Stack } from './Stack';

import '../styles/app.css';

export const App = () => {
	return (
		<div className="app" id="home">
			<div className="content">
				<Splash />
				<div className="main">
					<Header />
					<About />
					<Stack />
					<Projects />
				</div>
				<Footer />
			</div>
		</div>
	);
};
