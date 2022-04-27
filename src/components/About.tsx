import '../styles/about.css';

export const About = () => {
    return (
        <section className="about" id="about">
            <div>
            <h1 className="title">About.</h1>
            <p className="text">
                My coding journey started as a kid writing small batch files in
                QBasic to automate the process of backing files up to floppy
                disks, which was useful as I liked taking stuff apart to figure
                out how they worked. This included the family computer. I broke
                it. A lot.
            </p>
            <p className="text">
                Over time I went from breaking a bunch of stuff, to fixing
                stuff, to building stuff. And I realised I quite liked building
                things.
            </p>
            <p className="text">
                As a software developer I get to combine my love for coding with my love
                of building things.
            </p>
            <p className="text">
                Take a look at some of my projects to see what I'm currently
                working on and to see what tools I'm currently using.
            </p>
            </div>
        </section>
    );
};
