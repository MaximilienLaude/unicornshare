import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import sponsor from './images/fanta-logo-sponsor-officiel-fun.png'
import "./main.css"


const Main = (props) => {
    return(
        <div className="mainConteneur">
            <div className="gallery">
                {props.image.slice(0,10).map((item) => {
                    return(
                        <Link to={`/pictures/${item.id}`}  key={item.id}><img src={item.thumbnailUrl} alt="" /></Link>
                    );
                })}
                <img src={sponsor} alt='' className="imageSponsor"></img>
            </div>
        </div>
    )
}

export default Main;