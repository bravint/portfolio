import '../styles/about.css';

export const About = () => {
    return (
        <section className="about" id="about">
            <div>
            <h1 className="title">About.</h1>
            <p className="text">
                My coding journey started as a kid writing small batch files in
                QBasic to automate the process of backing files up to floppy
                disks, which was useful as I liked taking apart the family computer to figure out how it worked. I broke
                it. A lot.
            </p>
            <p className="text">
                I spent a few years running a business, where again I created small scripts to automate some of the day to day tasks. And then I decided I should try and learn how to make fully fledged websites and apps. Fast forward to today and here I am, a full stack developer that gets to combine my love for coding with my love
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
