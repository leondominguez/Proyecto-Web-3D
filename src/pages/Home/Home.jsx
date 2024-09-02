// Home.jsx
import React from 'react';
import Quiz from '../logical-components/Quiz';
import Navbar from '../../components/global-components/Navbar';
import './Home.css';
import SphereGeometry from '../../components/3d-models/SphereGeometry.jsx';

const Home = () => {
    return (
        <div className="home-container">
            <div className="header-container">
                <h1 className='NameTeam'>Eco Vanguardia</h1>
                <p></p>
                <p className='SloganTeam'>¡Pequeños cambios, grandes impactos!</p>
            </div>
            <div className="containerGeometry">
                <SphereGeometry />
            </div>
           
            <div className="quiz-container">
                <Quiz />
            </div>
            

            <Navbar />
        </div>
    );
};

export default Home;