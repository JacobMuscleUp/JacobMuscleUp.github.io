import React from 'react';
import Typist from 'react-typist';
import TypistLoop from '../utils/TypistLoop';
import './AboutPage.css';

class AboutPage extends React.Component {
    render() {
        return (
            <div className="AboutPage">
                <Typist>
                    <h1>Welcome to Jacob's space</h1>
                </Typist>
                <TypistLoop interval={1000}>
                {[
                    'Jacob Chan is a software developer',
                    'He likes maintainable code'
                ].map(text => <Typist key={text} startDelay={1000}><p>{text}</p></Typist>)}
                </TypistLoop>
            </div> 
        );
    }
}

export default AboutPage;