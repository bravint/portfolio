import ReactTypingEffect from 'react-typing-effect';

import '../styles/splash.css';

export const Splash = () => {
	return (
		<div className="splash">
			<p className="subtitle">Hello World!👋 I'm</p>
			<p className="title">Bravin</p>

			<p className="subtitle">
				A full stack software developer from London
			</p>
			<div className="subtitle">
				<ReactTypingEffect
					staticText={'I build'}
					typingDelay={1000}
					speed={100}
					eraseDelay={1000}
					eraseSpeed={100}
					text={[`websites`, `apps`, `databases`, `emoji pyramids`]}
				/>
			</div>
		</div>
	);
};
