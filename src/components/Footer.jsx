import { Contact } from './Contact';

import '../styles/footer.css';

export const Footer = () => {
    return (
        <footer>
            <ul>
                <p>Find me on:</p>
                <li>Github</li>
                <li>LinkedIn</li>
                <p>Bravin Thillainathan 2022</p>
            </ul>
            <Contact />
        </footer>
    );
};
