import React from 'react';
import { Button, Card, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NoMatch = () => {
    return (
        <div>
            <h1>Error 404</h1>
            <Link to="/home"><Button variant="primary">Go to Home</Button></Link>
        </div>
    );
};

export default NoMatch;