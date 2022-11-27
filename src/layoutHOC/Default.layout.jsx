import React from 'react';
import Navbar from '../components/Navbar/Navbar.component';

const DefaultLayoutHOC = (Component) => ({ ...props }) => {
    return (
        <div>
            <Navbar />
            <Component {...props} />
            <div>Footer</div>
        </div>
    )
};

export default DefaultLayoutHOC;