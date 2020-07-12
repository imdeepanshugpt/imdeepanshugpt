import React from 'react';
import Bio from '../bio/Bio';
import Skills from '../skills/Skills';
import Blog from '../blog/Blog';
import Contact from '../../contact/Contact';

const Home = () => {
    return (
        <div className="home">
            <Bio />
            <Skills />
            <Blog />
            <Contact></Contact>
        </div>
    );
}

export default Home;