import React from 'react';
import '../App.css';
import './LandingPage.css';
import { Button } from './Button';

function LandingPage() {
    return (
        <div className='landing-container'>
            <h1>3D Printing</h1>
            <p>nunc aliquet bibendum enim</p>
            <p>Lorem ipsum dolor Sed euismod nisi porta lorem.</p>
            <div className='landing-btns'>
                <Button class='btns' buttonStyle='btn--outline' buttonSize='btn-large'>
                    Get Started
                </Button>
            </div>
        </div>
    )
}

export default LandingPage;