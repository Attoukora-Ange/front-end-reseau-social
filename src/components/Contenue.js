import React from 'react';
import Droit from './contenue/Droit';
import Gauche from './contenue/Gauche';
import Milieu from './contenue/Milieu';
import '../assets/css/contenue.css'

const Contenue = () => {
    return (
        <div className='contenue'>
            <Gauche/>
            <Milieu/>
            <Droit/>
        </div>
    );
};

export default Contenue;