import React from 'react';

export class AdminPanelHeader extends React.Component{
    render(){
        return(
            <div className="admin_panel_header">
                <span>Yourt<span>Home</span></span>
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