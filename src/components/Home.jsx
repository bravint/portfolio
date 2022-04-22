import React from 'react';
import '../styles/home.css';

export const Home = () => {
    return (
        <section className="home">
            <div className="hero-text">
                <h1 className="hello-text">Hello <br/> World.</h1>
                <h1>I'm Bravin</h1>
                <h2>A Full-Stack Software Developer from London</h2>
            </div>
            {/* <img className="avatar" src="avatar-edit.png" alt="avatar" /> */}
        </section>
    );
};
