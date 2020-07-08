import React from 'react';
import { Link } from 'react-router-dom';
import adsImg from '../../content/images/main/ads-card.jpg'


export const MainFlatCard = (props) =>{
    return(
        <>
            <Link to="/flatcard">               
              <div className="ads__block">
                <img src={adsImg} alt="img"/>
                <div className="ads__block__info">
                <span>{props.title}</span>
                <div className="ads__price">
                  <span>{props.cost}c</span>
                  <Link to="/mapfilter">
                    <span>На карте</span>
                  </Link>
                </div>
                </div>
              </div>
            </Link>  
        </>
    )
} 