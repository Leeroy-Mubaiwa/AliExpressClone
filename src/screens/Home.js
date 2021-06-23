import React from 'react';
import '../components/Style/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstSection from '../components/HomeComponents/FirstSection/FirstSection';
import SecondSection from '../components/HomeComponents/SecondSection/SecondSection';

function Home() {
    return (
        <div className="home-page">
            <div className="container">
                <FirstSection/>
                <SecondSection/>
            </div>
        </div>
    )
}

export default Home
