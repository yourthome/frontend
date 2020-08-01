import React from 'react';
import { Link } from 'react-router-dom';

export class AdminPanelHeader extends React.Component{
    render(){
        return(
            <div className="admin_panel_header">
                <Link to="/">
                    <div className="logo-title">
                        <p id="p-half1">Yourt</p><p id="p-half2">Home</p>
                    </div> 
                </Link>
                <div className='admin_icon'>
                    <div>
                        <img src={require(`../../content/images/adminPanel/user.png`)} alt="img"></img>
                    </div>
                    <span>admin</span>
                </div>
            </div>
        )
    }
}