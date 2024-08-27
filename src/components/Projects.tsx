import { Football } from './projects/Football';
import { Nomad } from './projects/Nomad';
import { PokemonForum } from './projects/Pokemon';

import '../styles/projects.css';

export const Projects = () => {
	return (
		<div id="projects">
			<div className="intro">
				<h2 className="section-title">Projects</h2>
				<p>Some stuff I've built</p>
			</div>
			<div className="projects">
				<Football />
				<Nomad />
				<PokemonForum />
			</div>
		</div>
	);
};
