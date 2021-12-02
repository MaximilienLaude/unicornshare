import React from 'react'
import logoFrance from './images/france-coca-cola-logo.png'
import loupe from './images/SEARCH-white@2x.png'
import burger from './images/menu-b.png'
import "./Header.css"

export default function Header(){
    return(
        <div className='fanta'>
            <img className='icon1' src={burger} alt='' />
            <a href='https://www.coca-cola-france.fr/'><img classeName='logo-coca' src={logoFrance} alt='logo Coca-cola' /></a>
            <img className='icon2' src={loupe} alt='' />
        </div>
    )
}