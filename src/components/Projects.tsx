import { Football } from './projects/Football';
import { Nomad } from './projects/Nomad';
import { PokemonForum } from './projects/Pokemon';

export const Projects = () => {
    return (
        <section className="projects">
            <ul>
                <Football />
                <Nomad />
                {/* <PokemonForum /> */}
            </ul>
        </section>
    );
};
