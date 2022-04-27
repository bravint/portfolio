import { Football } from './projects/Football';
import { Nomad } from './projects/Nomad';
import { PokemonForum } from './projects/Pokemon';
import { Leaderboard } from './projects/Leaderboard';

export const Projects = () => {

    return (
        // <section className={`projects ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <section className="projects" id="projects">
            <h1 className="title">Featured Projects.</h1>
            <h1 className="subtitle"> - Some of the stuff I've built</h1>
            <ul>
                <Football />
                <Nomad />
            </ul>
            <h1 className="title">Other Projects.</h1>
            <h1 className="subtitle"> - Other projects I've been a part of</h1>
            <ul>
                <PokemonForum />
                <Leaderboard />
            </ul>
        </section>
    );
};
