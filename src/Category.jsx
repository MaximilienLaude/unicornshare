import React from 'react';
import ImageFanta from './images/logo-fanta.png';
import SimpleModal from './Modal';

export default function Category(){
    return(
        <div className="filterList">
            <div>
                <a  href><img className='fanta-logo'src={ImageFanta} /></a>
            </div>
            
                <nav>
                    <ul className='filters'>
                        <li className="ligne"></li>
                        <li>
                            {/* Nom de la category */}
                        </li>
                    </ul>
                </nav>
            
            <div className="upload">
                <SimpleModal /> 
            </div>   
        </div>
    )
}