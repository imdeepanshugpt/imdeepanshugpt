import React from 'react';
import Bio from '../bio/Bio';
import Skills from '../skills/Skills';
import Blog from '../blog/Blog';

const Home = () => {
    return (
        <div className="home" style={{ paddingTop: '60px' }}>
            <Bio />
            <Skills />
            <Blog />
        </div>
    );
}

export default Home;