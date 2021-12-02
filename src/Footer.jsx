import React from 'react';
import logoFrance from './images/france-coca-cola-logo.png'
import "./Footer.css"

export default function Footer(){
    return(
        <div>
            <div className='info-bar'>
                <p>Pour votre santé, évitez de manger trop gras, trop sucré, trop salé. <a className="withoutLinkRed" href='https://www.mangerbouger.fr/'> www.mangerbouger.fr</a></p>
            </div>

            <div className='footer'>
                <div className='logo-bar'>
                    <a href='https://www.coca-cola-france.fr/'><img src={logoFrance} /></a>
                </div>
                <div className="coca-container">
                    <div className="cgu"> 
                        <a className="withoutLinkGrey" href='https://www.coca-cola-france.fr/politique-de-confidentialite' >Politique de Confidentialité</a> 
                        <t className="barreSeparateur">|</t> 
                        <a className="withoutLinkGrey" href='https://www.coca-cola-france.fr/CookiePolicy' >Politique d'utilisation des cookies</a>
                        <t className="barreSeparateur">|</t>  
                        <a className="withoutLinkGrey" href='https://www.coca-cola-france.fr/conditions-d-utilisation' >Conditions d'utilisation</a> 
                        <t className="barreSeparateur">|</t> 
                        <a className="withoutLinkGrey" href='https://www.coca-cola-france.fr/nous-contacter' >Nous contacter</a> 
                        <t className="barreSeparateur">|</t> 
                        <a className="withoutLinkGrey" href='https://club.coca-cola-france.fr/' >Club Coca-Cola</a>
                    </div>
                    <div className="legal-notice">
                        <p>Ce site vous propose des contenus et des promotions à propos des marques,
                             des produits et des activités des sociétés du groupe The Coca-Cola Company 
                             ou de ses partenaires embouteilleurs en France.</p>
                        <p>©2020 The Coca-Cola Company, Tous Droits Réservés</p>
                    </div>
                </div>

            </div>
        </div>
    )
}