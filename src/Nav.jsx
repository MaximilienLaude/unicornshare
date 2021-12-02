import React from 'react';
import ImageFanta from './images/logo-fanta.png';
import SimpleModal from './Modal';
import "./Nav.css";


export default function Nav(){
    return(
        <div className="filterList">
            <div className="logo">
                <a  href><img className='fanta-logo'src={ImageFanta} /></a>
                <p className="ligne"></p>
            </div>
            
                <nav>
                    <ul className='filters'>
                        <li className="nav">
                            <a onClick>FANTA&nbsp;A&nbsp;LA&nbsp;MAISON</a>
                        </li>
                        <li className="nav">
                            <a onClick>FANTA&nbsp;AU&nbsp;BUREAU</a>
                        </li>
                        <li className="nav">
                            <a onClick>FANTA&nbsp;EN&nbsp;VACANCES</a>
                        </li>
                    </ul>
                </nav>
            
            <div className="upload">
                <SimpleModal /> 
            </div>   
        </div>
    )
}

