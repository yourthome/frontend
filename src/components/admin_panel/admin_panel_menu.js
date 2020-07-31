import React from 'react';

export class AdminPanelMenu extends React.Component{


    render(){
        console.log(this.props)
        return(
            <div className={this.props.active ? 'admin_panel_menu' : 'admin_panel_menu passive_menu'}>
                <div className="admin_panel_menu_head">
                    <span>YourthHome</span>
                </div>
                <div className={this.props.usersComp ? 'admin_menu_catalog' : 'admin_menu_catalog admin_menu_catalog_active'} onClick={this.props.toggleUsersComp0}>
                    <img src={require(`../../content/images/adminPanel/list.png`)} alt="img"></img>
                    <span>Обьявления</span>
                </div>
                <div className={this.props.usersComp ? 'admin_menu_catalog  admin_menu_catalog_active' : 'admin_menu_catalog'} onClick={this.props.toggleUsersComp1}>
                    <img src={require(`../../content/images/adminPanel/user.png`)} alt="img"></img>
                    <span>Пользователи</span>
                </div>
            </div>
        )
    }
}