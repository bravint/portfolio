import '../styles/stack.css';

export const Stack = () => {
    return (
        <section className="stack">
            <div></div>
            <div>
                <h1 className="title">Tech stack.</h1>
                <h1 className="subtitle"> - These are some of the tools I've used so far
                </h1>
                <ul className="stack-container">
                    <li className="text">HTML</li>
                    <li className="text">CSS</li>
                    <li className="text">JavaScript</li>
                    <li className="text">React</li>
                    <li className="text">Node.js</li>
                    <li className="text">TypeScript</li>
                    <li className="text">Prisma</li>
                    <li className="text">PostgreSQL</li>
                    <li className="text">NGINX</li>
                </ul>
                <p className="text">
                    Currently learning TypeScript to make my code more robust
                    and to serve as an introduction to statically-typed
                    languages, and Docker as an alternative method of hosting
                    apps on the internet
                </p>
                <p className="text">
                    Check back to see what new tools I've learnt to use!
                </p>
            </div>
        </section>
    );
};
