import { Football } from './projects/Football';
import { Nomad } from './projects/Nomad';
import { PokemonForum } from './projects/Pokemon';
import { Leaderboard } from './projects/Leaderboard';

export const Projects = () => {

    return (
        // <section className={`projects ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <section className="projects title" id="projects">
            <h1 className="project-title">Featured Projects.</h1>
            <h1 className="">Some of the stuff I've built</h1>
            <ul>
                <Football />
                <Nomad />
            </ul>
            <h1 className="">Other projects</h1>
            <ul>
                <PokemonForum />
                <Leaderboard />
            </ul>
        </section>
    );
};
