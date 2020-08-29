import React from 'react';
import {AdminPanelMenu} from './admin_panel_menu';
import AdminPanelContent from './admin_panel_content';
import AdminPanelContentUsers from './admin_panel_content_users';
import './admin-panel.css';


export default class AdminPanel extends React.Component{
    state = {
        active: false,
        usersComp: false
        }
    
    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    toggleActive = () => {
        this.setState({
            active: !this.state.active
        })
    }

    toggleUsersComp1 = () =>{
        this.setState({
            usersComp: true
        })
    }

    toggleUsersComp0 = () =>{
        this.setState({
            usersComp: false
        })
    }
    

    render(){
        return(
            <div className="admin_panel">
                <AdminPanelMenu active={this.state.active} toggleActive={this.toggleActive} toggleUsersComp1={this.toggleUsersComp1} toggleUsersComp0={this.toggleUsersComp0} usersComp={this.state.usersComp}/>
                {this.state.usersComp ? <AdminPanelContentUsers active={this.state.active} toggleActive={this.toggleActive}/>  : <AdminPanelContent active={this.state.active} toggleActive={this.toggleActive} />}
            </div>
            
        )
    }
}
