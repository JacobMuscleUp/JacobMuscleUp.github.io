import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import './ContactPage.css';

class ContactPage extends React.Component {
    render() {
        return (
            <div className="ContactPage-container">
                <div className='ContactPage-item'>
                    <a href="mailto:jacobtheperson123@hotmail.com" rel="noopener noreferrer" target="_blank" >
                        <FontAwesomeIcon icon={faEnvelope} size="4x" /><p>jacobtheperson123@hotmail.com</p>
                    </a>
                </div>
                <div className='Contact-item'>
                    <a href="https://github.com/JacobMuscleUp" rel="noopener noreferrer" target="_blank" >
                        <FontAwesomeIcon icon={faGithub} size="4x" /><p>github.com/JacobMuscleUp</p>
                    </a>
                </div>
            </div>
        );
    }
}

export default ContactPage;